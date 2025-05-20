import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Layout from '../../components/Layout';
import { getPostBySlug } from '../../lib/mdx';

type Props = {
  source: MDXRemoteSerializeResult;
};

export default function PostPage({ source }: Props) {
  return (
    <Layout>
      <div className="prose font-sans dark:prose-invert">
        <MDXRemote {...source} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const slug = context.params?.slug as string;
  const { source } = await getPostBySlug(slug);

  return {
    props: { source },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], // 추후 자동 처리 가능
    fallback: false,
  };
};
