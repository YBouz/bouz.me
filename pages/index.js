import Container from '@/components/Layout/Container';
import { Avatar, Heading, HStack, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Container>
      <HStack spacing={4} mb={6}>
        <Avatar src="/me.jpeg" alt="My Avatar" size="xl" />
        <Heading>Hey, I'm Youssef Bouz</Heading>
      </HStack>

      <Text maxW={'60ch'}>
        I'm a developer specialized in Web Development and XR development. I
        work as an Engineering Associate at ShaikhTech. You made it to my
        personal piece of the internet where I showcase my latest project and
        share some writings.
      </Text>
    </Container>
  );
};

export default HomePage;
