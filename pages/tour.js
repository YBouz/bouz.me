import Container from '@/components/Layout/Container';
import { Divider } from '@chakra-ui/react';
import React from 'react';

const TourPage = () => {
  return (
    <Container>
      <Divider mt={'140px'} my={16} />
      <iframe
        id="showcase-iframe"
        width="100%"
        height="800px"
        src={`https://www.alefvr.com/showcase/8jgGxFNLx8o`}
        frameBorder="0"
        allowFullScreen
        allow="xr-spatial-tracking"
      />
    </Container>
  );
};

export default TourPage;
