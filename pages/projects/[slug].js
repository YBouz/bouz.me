import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { getFileBySlug, getFiles } from '@/lib/mdx';
import ProjectLayout from '@/components/ProjectLayout';
import components from '@/components/MDXComponents';

const PostPage = ({ code, frontMatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <ProjectLayout frontMatter={frontMatter}>
      <Component components={{ ...components }} />
    </ProjectLayout>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles('projects');

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
  const post = await getFileBySlug('projects', params.slug);

  return { props: { ...post } };
}

export default PostPage;
