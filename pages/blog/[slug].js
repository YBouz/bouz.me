import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { getFileBySlug, getFiles } from '@/lib/mdx';
import PostLayout from '@/components/PostLayout';
import components from '@/components/MDXComponents';

const PostPage = ({ code, frontMatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <PostLayout frontMatter={frontMatter}>
      <Component components={{ ...components }} />
    </PostLayout>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: { ...post } };
}

export default PostPage;
