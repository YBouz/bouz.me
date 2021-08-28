import { Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import { getAllFilesFrontMatter } from '@/lib/mdx';
import Container from '@/components/Layout/Container';
import ProjectItem from '@/components/Projectitem';
import { sortByDate } from 'utils/sort';

const BlogPage = ({ posts }) => {
  return (
    <Container
      title="Youssef Bouz - Projects"
      description="A portfolio and showcase of my current relevant work, projects and skills."
    >
      <Flex
        flexDir="column"
        justify="center"
        alignItems="start"
        maxW="2xl"
        mx="auto"
        mb={4}
      >
        <Heading mb={4}>Projects</Heading>
        <Text maxW={'60ch'}>
          A portfolio and showcase of my current relevant work, projects and
          skills.
        </Text>
        <VStack mt={8} spacing={4} divider={<Divider />}>
          {posts.map((frontMatter) => (
            <ProjectItem key={frontMatter.title} {...frontMatter} />
          ))}
        </VStack>
      </Flex>
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('projects');

  return { props: { posts: posts.sort(sortByDate) } };
}

export default BlogPage;
