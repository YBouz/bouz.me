import Container from '@/components/Layout/Container';
import { Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Container>
      <Heading
        size="md"
        color="twitter.500"
        fontFamily={`'Roboto Mono', monospace`}
        fontWeight="light"
      >
        Hi, my name is
      </Heading>
      <Heading size="4xl" fontWeight="medium">
        Youssef Bouz
      </Heading>
      <Heading
        size="2xl"
        color={useColorModeValue('gray.700', 'gray.300')}
        fontWeight="normal"
        letterSpacing="wide"
        my={2}
      >
        I build stuff for the web.
      </Heading>

      <Text maxW={'60ch'}>
        I'm a developer specialized in Web development and XR development. I am
        currently focused on building an enterprise platform for 3D Virtual Tour
        management at{' '}
        <Link href="https://shaikhtech.com" rel="noopener" target="_blank">
          ShaikhTech
        </Link>
        .
      </Text>
    </Container>
  );
};

export default HomePage;
