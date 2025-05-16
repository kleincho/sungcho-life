// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const POSTS_PATH = path.join(process.cwd(), 'posts')

export async function getPostBySlug(slug: string): Promise<{ source: MDXRemoteSerializeResult }> {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(fileContent)

  const mdxSource = await serialize(content)

  return { source: mdxSource }
}
