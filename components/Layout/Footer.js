import {
  ButtonGroup,
  Divider,
  Flex,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

import SocialButton from '../Common/SocialButton';
import { SocialData } from '../Common/SocialData';

const Footer = () => {
  return (
    <Flex
      as="footer"
      flexDir="column"
      bg={useColorModeValue('gray.50', 'gray.900')}
      w="full"
      p={8}
      mt={8}
    >
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        w="full"
        maxW="50vw"
        align={{ base: 'center', md: 'flex-start' }}
        justifyContent="space-between"
        mx="auto"
      >
        <Text mb={{ base: 4, md: 0 }}>
          &copy; {new Date().getFullYear()} Youssef Bouz
        </Text>

        <ButtonGroup>
          {SocialData.map((data, i) => (
            <SocialButton
              key={i}
              label={data.label}
              href={data.href}
              icon={data.icon}
            />
          ))}
        </ButtonGroup>
      </Flex>

      <Divider mt={4} />
    </Flex>
  );
};

export default Footer;
