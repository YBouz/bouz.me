import { useRouter } from 'next/router';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import { FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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
        alignItems="start"
        maxW="2xl"
        mt={'140px'}
        mb={8}
      >
        <Heading>{frontMatter.title}</Heading>

        <Flex alignItems="center" mt={2}>
          <Text
            size="sm"
            color={useColorModeValue('gray.700', 'gray.300')}
            mr={2}
          >
            {format(parseISO(frontMatter.publishedAt), 'MMMM, yyyy')}
          </Text>
          {frontMatter.tags.map((tag, i) => (
            <Badge key={i} m={1} colorScheme="blue">
              {tag}
            </Badge>
          ))}
        </Flex>

        <Box w="full" lineHeight="1.75" maxW="65ch">
          {children}
        </Box>

        <HStack spacing={4} my={8}>
          <Button
            onClick={() => router.back()}
            variant="solid"
            leftIcon={<FaChevronRight />}
          >
            {'Go Back'}
          </Button>

          {frontMatter.live && (
            <IconButton
              as="a"
              href={frontMatter.live}
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaExternalLinkAlt />}
              variant="ghost"
            />
          )}

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
