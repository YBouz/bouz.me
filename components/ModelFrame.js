import { AspectRatio } from '@chakra-ui/react';

const ModelFrame = ({ modelId }) => {
  return (
    <AspectRatio ratio={16 / 9} my={6}>
      <iframe
        id="showcase-iframe"
        width="710"
        height="400"
        src={`https://my.matterport.com/show?m=${modelId}&play=1`}
        frameBorder="0"
        allowFullScreen
        allow="xr-spatial-tracking"
      />
    </AspectRatio>
  );
};

export default ModelFrame;
