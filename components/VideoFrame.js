import { AspectRatio } from '@chakra-ui/react';

const VideoFrame = ({ url }) => {
  return (
    <AspectRatio ratio={16 / 9} my={6}>
      <iframe
        width="710"
        height="400"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
};

export default VideoFrame;
