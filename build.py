#!/usr/bin/env python3
"""
Build script to generate HTML files from markdown content + Jinja2 templates.
Supports bilingual output: English at root, Korean at /kr/.
"""

import os
import markdown
import yaml
from pathlib import Path
from jinja2 import Environment, FileSystemLoader
from collections import defaultdict

base_dir = Path(__file__).parent
template_dir = base_dir / 'templates'
env = Environment(loader=FileSystemLoader(template_dir))


def read_md(filepath):
    """Parse YAML frontmatter + markdown body → (meta dict, html string)."""
    with open(filepath, 'r', encoding='utf-8') as f:
        raw = f.read()

    meta = {}
    body = raw

    if raw.startswith('---'):
        parts = raw.split('---', 2)
        if len(parts) >= 3:
            meta = yaml.safe_load(parts[1]) or {}
            body = parts[2].strip()

    html = markdown.markdown(body, extensions=['tables', 'fenced_code'])
    return meta, html


def render(template_name, output_path, **kwargs):
    """Render a template and write to output_path."""
    template = env.get_template(template_name)
    html = template.render(**kwargs)
    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated {output_path}")


def scan_entries(content_subdir, url_prefix, lang):
    """Scan a directory of markdown files and return sorted entry list."""
    entries = []
    d = Path(content_subdir)
    if not d.exists():
        return entries

    for md_file in sorted(d.glob('*.md')):
        meta, _ = read_md(md_file)
        slug = md_file.stem
        entry = {
            'slug': slug,
            'title': meta.get('title', slug),
            'date': str(meta.get('date', '2026-01-01')),
            'description': meta.get('description', ''),
            'url': f"{url_prefix}{slug}.html",
        }
        entries.append(entry)

    entries.sort(key=lambda e: e['date'], reverse=True)
    return entries


def group_by_year(entries):
    """Group entries by year, returning list of (year, items) sorted descending."""
    by_year = defaultdict(list)
    for e in entries:
        year = e['date'][:4]
        by_year[year].append(e)
    return sorted(by_year.items(), reverse=True)


def build_lang(lang):
    """Build all pages for a given language ('en' or 'kr')."""
    content_dir = base_dir / 'content' / lang
    out_root = base_dir if lang == 'en' else base_dir / 'kr'

    nav_lang = lang

    # ── Simple pages ──────────────────────────────────────────────────────────
    simple_pages = ['index', 'about', 'notes', 'books']
    for page in simple_pages:
        md_path = content_dir / f'{page}.md'
        if not md_path.exists():
            print(f"Warning: {md_path} not found, skipping")
            continue

        meta, html_body = read_md(md_path)
        title = meta.get('title', page.capitalize())

        # index.html goes to root of out_root, others to out_root/<page>.html
        out_file = out_root / 'index.html' if page == 'index' else out_root / f'{page}.html'

        # page_slug for language toggle
        page_slug = 'index.html' if page == 'index' else f'{page}.html'

        render('simple.html', out_file,
               title=title,
               content=html_body,
               lang=nav_lang,
               page_slug=page_slug,
               show_lang_toggle=False,
               include_mathjax=False,
               include_accordion=False,
               custom_styles=None)

    # ── Essay pages ───────────────────────────────────────────────────────────
    essay_url_prefix = '/essays/' if lang == 'en' else '/kr/essays/'
    essays = scan_entries(content_dir / 'essays', essay_url_prefix, lang)

    for essay in essays:
        md_path = content_dir / 'essays' / f"{essay['slug']}.md"
        meta, html_body = read_md(md_path)
        out_file = out_root / 'essays' / f"{essay['slug']}.html"
        page_slug = f"essays/{essay['slug']}.html"

        render('essay.html', out_file,
               title=essay['title'],
               essay_title=essay['title'],
               content=html_body,
               lang=nav_lang,
               page_slug=page_slug,
               show_lang_toggle=True,
               include_mathjax=False,
               include_accordion=False,
               custom_styles=None)

    # ── Paper pages ───────────────────────────────────────────────────────────
    paper_url_prefix = '/papers/' if lang == 'en' else '/kr/papers/'
    papers = scan_entries(content_dir / 'papers', paper_url_prefix, lang)

    for paper in papers:
        md_path = content_dir / 'papers' / f"{paper['slug']}.md"
        meta, html_body = read_md(md_path)
        out_file = out_root / 'papers' / f"{paper['slug']}.html"
        page_slug = f"papers/{paper['slug']}.html"

        render('essay.html', out_file,
               title=paper['title'],
               essay_title=paper['title'],
               content=html_body,
               lang=nav_lang,
               page_slug=page_slug,
               show_lang_toggle=False,
               include_mathjax=False,
               include_accordion=False,
               custom_styles=None)

    # ── Listing pages ─────────────────────────────────────────────────────────
    render('list.html', out_root / 'essays.html',
           title='Essays',
           entries_by_year=group_by_year(essays),
           lang=nav_lang,
           page_slug='essays.html',
           show_lang_toggle=True,
           include_mathjax=False,
           include_accordion=False,
           custom_styles=None)

    render('list.html', out_root / 'papers.html',
           title='Papers',
           entries_by_year=group_by_year(papers),
           lang=nav_lang,
           page_slug='papers.html',
           show_lang_toggle=False,
           include_mathjax=False,
           include_accordion=False,
           custom_styles=None)


def main():
    print("Building English pages...")
    build_lang('en')
    print("\nBuilding Korean pages...")
    build_lang('kr')
    print("\nBuild complete!")


if __name__ == '__main__':
    main()
