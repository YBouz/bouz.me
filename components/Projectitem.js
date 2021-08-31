import Link from 'next/link';
import Image from 'next/image';
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
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
      <Stack spacing={4} cursor="pointer" _hover={{ opacity: 0.9 }}>
        <Box>
          <Heading as="h2" size="lg" fontWeight="medium" mb={4}>
            {title}
          </Heading>

          <Image
            src={image}
            alt={`${title} Image`}
            width={2120 / 2}
            height={1157 / 2}
          />
        </Box>

        <Box>
          {tags.map((tag, i) => (
            <Badge key={i} m={1} colorScheme="blue">
              {tag}
            </Badge>
          ))}
          <Text mt={2}>{summary}</Text>
        </Box>

        <HStack spacing={4} mt={4}>
          {github && (
            <Button onClick={() => router.push(github)} leftIcon={<FaGithub />}>
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
      </Stack>
    </Link>
  );
};

export default ProjectItem;
