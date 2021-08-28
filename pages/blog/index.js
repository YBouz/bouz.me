import { Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import { getAllFilesFrontMatter } from '@/lib/mdx';
import Container from '@/components/Layout/Container';
import PostItem from '@/components/PostItem';
import { sortByDate } from 'utils/sort';

const BlogPage = ({ posts }) => {
  return (
    <Container
      title="Youssef Bouz - Blog"
      description="Thoughts on the software industry, programming, tech and my personal life."
    >
      <Flex
        flexDir="column"
        justify="center"
        alignItems="start"
        maxW="2xl"
        mx="auto"
        mb={4}
      >
        <Heading mb={4}>Blog</Heading>
        <Text maxW={'60ch'}>
          I plan to start writing online soon. I've been wanting to start for a
          while but time has not allowed me. I want to share my knowledge and
          help others, and I think it will be a great way for me to document my
          work and retain my knowledge in the long run.
        </Text>

        <Heading as="h2" size="lg" mt={8} mb={4}>
          All Posts
        </Heading>
        <VStack spacing={4} divider={<Divider />}>
          {posts.map((frontMatter) => (
            <PostItem key={frontMatter.title} {...frontMatter} />
          ))}
        </VStack>
      </Flex>
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts: posts.sort(sortByDate) } };
}

export default BlogPage;
