import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

const VideoContainer = styled(motion.div)`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin: 2rem 0;
`;

const VideoPlayer = ({ url, title }) => {
  return (
    <VideoContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="500px"
        light={false}
        pip={true}
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          }
        }}
      />
      {title && <p>{title}</p>}
    </VideoContainer>
  );
};

export default VideoPlayer;