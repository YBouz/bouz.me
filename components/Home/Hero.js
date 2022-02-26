import {
  Box,
  ButtonGroup,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SlideFade,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react';
import React from 'react';
import { FaGraduationCap, FaRocket } from 'react-icons/fa';
import SocialButton from '../Common/SocialButton';
import { SocialData } from '../Common/SocialData';

const Hero = ({ ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack spacing={8} justify="center" align="flex-start" maxW="3xl" {...rest}>
      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.7 } }}
      >
        <Box pos="relative">
          <Image
            src="/design.svg"
            filter={colorMode === 'light' ? 'invert(1)' : 'invert(0.1)'}
            w={{ base: '70px', md: '140px' }}
            position="absolute"
            top={{ base: '0', md: '-15' }}
            left={{ base: '-5', md: '-10' }}
            zIndex={0}
            alt=""
          />
          <Text
            position="relative"
            color="blue.500"
            fontSize="xl"
            fontWeight="medium"
            zIndex={1}
          >
            Hi, my name is
          </Text>
        </Box>
        <Heading position="relative" size="4xl" lineHeight={'95%'} zIndex={1}>
          Youssef Bouz.
        </Heading>
      </SlideFade>

      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.8 } }}
      >
        <Heading fontSize="2xl" fontWeight="medium">
          Software Engineer{' '}
          <Box as="span" color="gray">
            specialized in Web & XR development.
          </Box>
        </Heading>
      </SlideFade>

      <SlideFade
        direction="top"
        in={true}
        transition={{ enter: { duration: 0.4, delay: 0.9 } }}
      >
        <List spacing={2} maxW="70ch">
          <ListItem>
            <ListIcon as={FaGraduationCap} color="blue.300" />
            Bachelor's in Computer Science from the American University of
            Sharjah.
          </ListItem>
          <ListItem>
            <ListIcon as={FaRocket} color="blue.300" />
            Learning and practicing through industry projects and side-projects.
          </ListItem>
        </List>
      </SlideFade>

      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 1.0 } }}
      >
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
      </SlideFade>
    </Stack>
  );
};

export default Hero;
