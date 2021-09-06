import {
  Heading,
  Stack,
  SlideFade,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const Timeline = ({ ...rest }) => {
  return (
    <Stack
      spacing={4}
      justify="center"
      align="flex-start"
      maxW="3xl"
      mb={8}
      {...rest}
    >
      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 1.1 } }}
      >
        <Heading as="h1" fontSize={{ base: '24px', md: '30px', lg: '36px' }}>
          Timeline
        </Heading>
      </SlideFade>

      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 1.2 } }}
      >
        <Heading mt={10} mb={5} as="h2" size="md">
          2021
        </Heading>
        <List spacing={18} fontSize="18">
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.500" />
            Accepted a job offer from ShaikhTech with the role of Associate
            Engineer!
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.500" />
            Completed my summer internship at ShaikhTech
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.500" />1 course remaining
            until my graduation!
          </ListItem>
        </List>
      </SlideFade>

      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.4, delay: 1.2 } }}
      >
        <Heading mt={10} mb={5} as="h2" size="md">
          2020
        </Heading>
        <List spacing={18} fontSize="18">
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.500" />
            Completed the Once Upon a Time in Palestine Pilot project!
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.500" />
            Completed the Reimagine Al Hamra project!
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="blue.500" />
            Got hired as a part-time Research Student Assistant
          </ListItem>
        </List>
      </SlideFade>
    </Stack>
  );
};

export default Timeline;
