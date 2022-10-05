import Link from 'next/link';
import { Heading } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Heading
        size="md"
        letterSpacing="wider"
        color="blue.500"
        cursor="pointer"
        _hover={{
          transform: 'scale(1.4)',
          transition: 'all 0.4s ease-in-out'
        }}
      >
        YB
      </Heading>
    </Link>
  );
};

export default Logo;
