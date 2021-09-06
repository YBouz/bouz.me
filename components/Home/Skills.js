import { Heading, Text, SlideFade, Stack, SimpleGrid } from '@chakra-ui/react';

import SkillCard from './SkillCard';
import { skillsData } from './SkillsData';

const Skills = ({ ...rest }) => {
  return (
    <Stack
      spacing={4}
      justify="center"
      align="flex-start"
      maxW="3xl"
      mb={8}
      {...rest}
    >
      <SlideFade in={true} transition={{ enter: { duration: 0.4, delay: 1 } }}>
        <Heading
          as="h1"
          fontSize={{ base: '24px', md: '30px', lg: '36px' }}
          mb={3}
        >
          Skills & Technologies
        </Heading>
        <Text fontSize="xl" lineHeight={1.6}>
          As a software engineer, the learning is continuous and there are a
          variety of skills and tools I use while working.
        </Text>
        <SimpleGrid mt={10} columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {skillsData.map((data) => (
            <SkillCard skill={data} key={data?.name} />
          ))}
        </SimpleGrid>
      </SlideFade>
    </Stack>
  );
};

export default Skills;
