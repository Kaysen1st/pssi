import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import VideoPlayer from './VideoPlayer';

const DemoContainer = styled.section`
  margin: 3rem 0;
`;

const StepContainer = styled.div`
  margin-bottom: 3rem;
`;

const StepNumber = styled(motion.span)`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  margin-right: 1rem;
  box-shadow: 0 4px 10px rgba(66, 133, 244, 0.3);
`;

const StepHeading = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const KioskDemo = ({ title, steps, videoUrl }) => {
  return (
    <DemoContainer>
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>
      
      {videoUrl && <VideoPlayer url={videoUrl} />}
      
      {steps.map((step, index) => (
        <AnimatedCard key={index} delay={index * 0.1}>
          <StepContainer>
            <StepHeading>
              <StepNumber
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                {index + 1}
              </StepNumber>
              {step.title}
            </StepHeading>
            <div>{step.description}</div>
            {step.image && (
              <motion.img 
                src={step.image} 
                alt={step.title}
                style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              />
            )}
            {step.video && <VideoPlayer url={step.video} title={`Step ${index + 1}: ${step.title}`} />}
          </StepContainer>
        </AnimatedCard>
      ))}
    </DemoContainer>
  );
};

export default KioskDemo;