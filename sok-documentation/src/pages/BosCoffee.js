import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import KioskDemo from '../components/KioskDemo';
import AnimatedCard from '../components/AnimatedCard';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const BosCoffee = () => {
  const steps = [
    
  ];

  return (
    <PageContainer>
      <PageHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Bo's Coffee Self-Ordering Kiosk
        </motion.h1>
      </PageHeader>
      
      <AnimatedCard>
        <h2>Overview</h2>
        <p>Bo's Coffee has implemented a distinctly Filipino-centric self-ordering kiosk system that showcases their locally-sourced beans through an elegant touchscreen interface featuring detailed origin stories and flavor profiles. The kiosk experience reinforces Bo's commitment to Philippine coffee heritage while incorporating practical features like membership rewards integration and customizable brewing preferences, resulting in a 40% reduction in order errors and allowing baristas to focus more on craftsmanship rather than order-taking during busy periods.</p>
      </AnimatedCard>
      
      <KioskDemo
        title="Step-by-Step Guide to Using Bo's Coffee Self-Ordering Kiosk"
        steps={steps}
        videoUrl="https://youtube.com/shorts/Tz8ApqPeCFc?feature=share" // Replace with main demo video URL
      />
      
      <AnimatedCard delay={0.5}>
        <h2>Implementation Benefits</h2>
        <ul>
        <li>40% reduction in order errors improving inventory management</li>
        <li>Freed up baristas to focus on coffee craftsmanship</li>
        <li>Enhanced customer education on bean origins and flavor profiles</li>
        <li>Streamlined loyalty program integration with digital rewards tracking</li>
        <li>Improved data collection on customer preferences for future menu development</li>
        </ul>
      </AnimatedCard>
    </PageContainer>
  );
};

export default BosCoffee;