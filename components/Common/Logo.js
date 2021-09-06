import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Bracket = styled.span`
  color: #8f9094;
  font-weight: 'medium';
`;

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
        <Bracket>&#123;</Bracket> YB <Bracket>&#125;</Bracket>
      </Heading>
    </Link>
  );
};

export default Logo;
