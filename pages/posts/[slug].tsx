import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Layout from '../../components/Layout';
import { getPostBySlug, getPostSlugs } from '../../lib/mdx';

type Props = {
  source: MDXRemoteSerializeResult;
  title: string;
  date?: string;
};

export default function PostPage({ source, title, date }: Props) {
  return (
    <Layout>
      <h1>{title || 'Untitled'}</h1>
      {date ? <p>{date}</p> : null}
      <article>
        <MDXRemote {...source} />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const slug = context.params?.slug as string;
  const { source, frontMatter } = await getPostBySlug(slug);

  return {
    props: {
      source,
      title: frontMatter?.title || slug,
      date: frontMatter?.date || null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostSlugs().map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
