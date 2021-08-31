import {
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  SlideFade,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';

import { getAllFilesFrontMatter } from '@/lib/mdx';
import Container from '@/components/Layout/Container';
import ProjectItem from '@/components/Projectitem';
import { sortByDate } from 'utils/sort';

const ProjectsPage = ({ projects }) => {
  return (
    <Container
      title="Youssef Bouz - Projects"
      description="A portfolio and showcase of my current relevant work, projects and skills."
    >
      <Stack spacing={8} mt={'140px'} maxW="4xl">
        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Heading size="2xl" mb={4}>
            Projects
          </Heading>
          <Text maxW={'60ch'}>
            A portfolio and showcase of my current relevant work, projects and
            skills.
          </Text>
        </SlideFade>

        <SlideFade
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={8}
            divider={<Divider />}
          >
            {projects.map((frontMatter) => (
              <ProjectItem key={frontMatter.title} {...frontMatter} />
            ))}
          </SimpleGrid>
        </SlideFade>
      </Stack>
    </Container>
  );
};

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects');

  return { props: { projects: projects.sort(sortByDate) } };
}

export default ProjectsPage;
