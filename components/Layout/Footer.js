import {
  ButtonGroup,
  Divider,
  Flex,
  Link,
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
      justify="center"
      align="center"
      bg={useColorModeValue('gray.50', 'secondaryBg')}
      w="full"
      p={8}
    >
      <Link href="https://github.com/ybouz/bouz.me" isExternal>
        <Text fontSize="sm" color="gray" mb={4}>
          {/* &copy; {new Date().getFullYear()} */}
          Designed & Built by{' '}
          <Text as="span" color="blue.500">
            Youssef Bouz
          </Text>
        </Text>
      </Link>

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
  );
};

export default Footer;
