import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  LinkOverlay,
  LinkBox,
  useColorModeValue
} from '@chakra-ui/react';

const SkillCard = ({ skill }) => {
  return (
    <LinkBox as="article">
      <Flex
        p={4}
        borderColor={useColorModeValue('gray.300', 'gray.700')}
        borderRadius={'lg'}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        align="center"
        role="group"
        _hover={{
          borderColor: 'blue.500'
        }}
      >
        <IconButton
          as="a"
          href={skill?.url}
          rel="noopener"
          target="_blank"
          aria-label={skill?.name}
          icon={skill?.icon}
          mr={4}
          _groupHover={{ color: 'blue.500' }}
        />
        <LinkOverlay href={skill?.url} rel="noopener" isExternal>
          <Heading as="h2" size="sm">
            {skill?.name}
          </Heading>
        </LinkOverlay>
      </Flex>
    </LinkBox>
  );
};

export default SkillCard;
