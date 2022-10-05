import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  ButtonGroup
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

import Logo from '../Common/Logo';
import ColorModeSwitch from '../Common/ColorModeSwitch';
import { HeaderData } from './HeaderData';
import SocialButton from '../Common/SocialButton';
import { SocialData } from '../Common/SocialData';

const Header = () => {
  const router = useRouter();

  const bg = useColorModeValue('gray.50', 'secondaryBg');

  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener('scroll', changeNav);

    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const mobileNav = useDisclosure();

  return (
    <Flex
      as="nav"
      bg={scrollNav ? bg : 'transparent'}
      w="full"
      p={4}
      h="80px"
      mt="-80px"
      pos="sticky"
      top="0"
      zIndex="10"
      shadow="md"
      transition="0.6s all ease-out"
    >
      <Flex
        w="full"
        maxW={{ base: '80vw', md: '70vw' }}
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
      >
        <Logo />

        <HStack spacing={2}>
          <HStack display={{ base: 'none', md: 'inline-flex' }}>
            {HeaderData.map((data, i) => (
              <Button
                key={i}
                variant="ghost"
                colorScheme={router.pathname == data.href ? 'blue' : 'gray'}
                onClick={() => router.push(data.href)}
                isDisabled
              >
                {data.text}
              </Button>
            ))}
          </HStack>

          <ColorModeSwitch />

          {/* Mobile Navigation */}
          <Flex
            display={{ base: 'inline-flex', md: 'none' }}
            transition="0.3s ease-in-out"
          >
            <IconButton
              aria-label="Mobile Navigation Toggle"
              variant="solid"
              icon={<AiOutlineMenu />}
              isRound
              onClick={mobileNav.onOpen}
            />

            <Drawer
              placement="left"
              isOpen={mobileNav.isOpen}
              onClose={mobileNav.onClose}
            >
              <DrawerOverlay />
              <DrawerContent bgColor={bg}>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>

                <DrawerBody>
                  <VStack spacing={4} mt={4}>
                    {HeaderData.map((data, i) => (
                      <Button
                        key={i}
                        variant="ghost"
                        onClick={() => router.push(data.href)}
                        isDisabled
                      >
                        {data.text}
                      </Button>
                    ))}
                  </VStack>
                </DrawerBody>

                <DrawerFooter>
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
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
