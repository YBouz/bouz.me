import { Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Heading
        size="md"
        letterSpacing="wider"
        color="twitter.500"
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
