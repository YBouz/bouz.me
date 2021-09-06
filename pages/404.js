import { useRouter } from 'next/router';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import Container from '@/components/Layout/Container';

const Custom404Page = () => {
  const router = useRouter();

  return (
    <Container>
      <Heading mb={2}>404</Heading>

      <Heading as="h2" size="sm" mb={8}>
        You seem lost! This is not the right place.
      </Heading>

      <Button
        colorScheme="blue"
        rightIcon={<FaChevronRight />}
        onClick={() => router.push('/')}
      >
        Go back
      </Button>
    </Container>
  );
};

export default Custom404Page;
