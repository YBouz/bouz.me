import { useRouter } from 'next/router';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import {
  FaChevronRight,
  FaEdit,
  FaExternalLinkAlt,
  FaGithub
} from 'react-icons/fa';

import Container from './Layout/Container';

const editUrl = (slug) =>
  `https://github.com/ybouz/bouz.me/edit/main/data/blog/${slug}.mdx`;

const ProjectLayout = ({ children, frontMatter }) => {
  const router = useRouter();
  return (
    <Container
      title={`Youssef Bouz - ${frontMatter.title}`}
      description={frontMatter.summary}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <Flex
        as="article"
        flexDir="column"
        justify="center"
        alignItems="start"
        maxW="2xl"
        mx="auto"
        mb={16}
        w="full"
      >
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          justify="space-between"
          alignItems="start"
          w="full"
          mt={2}
        >
          <HStack spacing={2} mb={2}>
            <Heading>{frontMatter.title}</Heading>
            <Text
              size="sm"
              color={useColorModeValue('gray.700', 'gray.300')}
              ml={2}
            >
              {format(parseISO(frontMatter.publishedAt), 'MMMM, yyyy')}
            </Text>
          </HStack>
        </Flex>

        <Box w="full" lineHeight="1.75" maxW="65ch">
          {children}
        </Box>

        <HStack spacing={4} my={8}>
          <Button
            onClick={() => router.push('/projects')}
            variant="solid"
            leftIcon={<FaChevronRight />}
          >
            {'Go Back'}
          </Button>

          <IconButton
            as="a"
            href={frontMatter.live}
            target="_blank"
            rel="noopener noreferrer"
            icon={<FaExternalLinkAlt />}
            variant="ghost"
          />

          {frontMatter.github && (
            <IconButton
              as="a"
              href={frontMatter.github}
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaGithub />}
              variant="ghost"
            />
          )}
        </HStack>
      </Flex>
    </Container>
  );
};

export default ProjectLayout;
