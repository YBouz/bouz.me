import Container from '@/components/Layout/Container';
import Hero from '@/components/Home/Hero';
import Timeline from '@/components/Home/Timeline';
import { Divider } from '@chakra-ui/react';
import Skills from '@/components/Home/Skills';

const HomePage = () => {
  return (
    <Container>
      <Hero mt={'140px'} />
      <Divider my={16} maxW="3xl" />
      <Skills />
      <Divider my={16} maxW="3xl" />
      <Timeline />
    </Container>
  );
};

export default HomePage;
