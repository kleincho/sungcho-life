import { MDXRemote } from 'next-mdx-remote';
import { getMdxContent } from '../../lib/mdx';
import Layout from '../../components/Layout';

export default function PostPage({ source }) {
  return (
    <Layout>
      <div className="prose prose-lg font-body dark:prose-invert">
        <MDXRemote {...source} />
      </div>
    </Layout>
  );
}
