import {
  Divider,
  Flex,
  Heading,
  SlideFade,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';

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
      <Stack spacing={8} mt={'140px'} maxW="3xl">
        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Heading size="2xl" mb={4}>
            Blog
          </Heading>
          <Text>
            I plan to start writing online soon. I've been wanting sharing for a
            while but my time has been limited. I want to share my knowledge and
            help others, and I think it will be a great way for me to document
            my work and retain my knowledge in the long run.
          </Text>
        </SlideFade>

        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading as="h2" size="lg" mt={8} mb={4}>
            All Posts
          </Heading>
          <VStack spacing={4} align="flex-start" divider={<Divider />}>
            {posts.map((frontMatter) => (
              <PostItem key={frontMatter.title} {...frontMatter} />
            ))}
          </VStack>
        </SlideFade>
      </Stack>
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts: posts.sort(sortByDate) } };
}

export default BlogPage;
