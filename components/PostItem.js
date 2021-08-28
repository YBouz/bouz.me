import Link from 'next/link';
import { Flex, Heading, HStack, Text } from '@chakra-ui/react';

const PostItem = ({ title, summary, publishedAt, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <Flex
        flexDir="column"
        cursor="pointer"
        _hover={{ opacity: 0.7, transform: 'scale(1.02)' }}
      >
        <HStack>
          <Heading as="h3" size="md">
            {title}
          </Heading>

          <Text as="small" color="gray.500">
            {publishedAt}
          </Text>
        </HStack>

        <Text>{summary}</Text>
      </Flex>
    </Link>
  );
};

export default PostItem;
