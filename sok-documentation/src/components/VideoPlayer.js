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
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const VideoPlayer = ({ url, title }) => {
  return (
    <VideoContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <StyledReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing={false}
        light={false}
        pip={true}
        config={{
          youtube: {
            playerVars: {
              origin: window.location.origin,
              enablejsapi: 1,
              widgetid: 1,
              autoplay: 0
            }
          }
        }}
      />
      {title && <p>{title}</p>}
    </VideoContainer>
  );
};

export default VideoPlayer;