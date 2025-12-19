// lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

const POSTS_PATH = path.join(process.cwd(), 'posts');

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export async function getPostBySlug(
  slug: string
): Promise<{ source: MDXRemoteSerializeResult; frontMatter: Record<string, any> }> {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  const mdxSource = await serialize(content);

  return { source: mdxSource, frontMatter: data };
}
