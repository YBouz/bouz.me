import { useRouter } from 'next/router';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';
import { FaChevronRight, FaEdit } from 'react-icons/fa';

import Container from './Layout/Container';

const editUrl = (slug) =>
  `https://github.com/ybouz/bouz.me/edit/main/data/blog/${slug}.mdx`;

const PostLayout = ({ children, frontMatter }) => {
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

        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          justify="space-between"
          alignItems="start"
          w="full"
          mt={2}
        >
          <Flex alignItems="center" mb={4}>
            <Avatar src="/me.jpeg" alt="Youssef Bouz" size="sm" />
            <Text
              size="sm"
              color={useColorModeValue('gray.700', 'gray.300')}
              ml={2}
            >
              {frontMatter.by}
              {'Youssef Bouz / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </Text>
          </Flex>
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
          <Button
            as="a"
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="ghost"
            leftIcon={<FaEdit />}
            color={useColorModeValue('gray.700', 'gray.300')}
          >
            {'Edit on GitHub'}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default PostLayout;
