import Link from 'next/link';
import Image from 'next/image';
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Tag,
  Text,
  Tooltip,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';
import { useRouter } from 'next/router';

const ProjectItem = ({
  title,
  summary,
  image,
  live,
  github,
  tags,
  publishedAt,
  slug
}) => {
  const router = useRouter();

  return (
    <Link href={`/projects/${slug}`} passHref>
      <SimpleGrid
        columns={2}
        spacing={8}
        cursor="pointer"
        _hover={{ opacity: 0.9, transform: 'scale(1.01)' }}
      >
        <Box>
          <Image
            src={image}
            alt={`${title} Image`}
            width={2120 / 2}
            height={1157 / 2}
          />
          {tags.map((tag, i) => (
            <Tag key={i} m={1}>
              {tag}
            </Tag>
          ))}
        </Box>

        <Box>
          <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
            {title}
          </Heading>
          <Text>{summary}</Text>
          <HStack spacing={4} mt={4}>
            {github && (
              <Button
                onClick={() => router.push(github)}
                leftIcon={<FaGithub />}
              >
                GitHub
              </Button>
            )}
            <Button
              onClick={() => router.push(live)}
              leftIcon={<FaExternalLinkAlt />}
            >
              Preview
            </Button>
          </HStack>
        </Box>
      </SimpleGrid>
    </Link>
  );
};

export default ProjectItem;
