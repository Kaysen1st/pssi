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

const KFC = () => {
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
          KFC Self-Ordering Kiosk
        </motion.h1>
      </PageHeader>
      
      <AnimatedCard>
        <h2>Overview</h2>
        <p>KFC's self-ordering kiosk system employs a streamlined interface optimized for quick service, featuring high-resolution images of their iconic chicken products alongside combo recommendations. The implementation stands out for its efficient order customization workflow that allows customers to modify spice levels and sides with minimal friction, while the backend integration with KFC's kitchen display system ensures precise preparation timing that maintains their 'hot and fresh' product promise, ultimately reducing counter congestion during peak hours by up to 35%.</p>
      </AnimatedCard>
      
      <KioskDemo
        title="Step-by-Step Guide to Using KFC Self-Ordering Kiosk"
        steps={steps}
        videoUrl="https://youtube.com/shorts/S4yKDfM6Zg4?si=vxUOxvrARuHzxxCy" // Replace with main demo video URL
      />
      
      <AnimatedCard delay={0.5}>
        <h2>Implementation Benefits</h2>
        <ul>
          <li>Reduced wait times during peak hours</li>
          <li>Increased order accuracy with visual confirmation</li>
          <li>Enhanced upselling through suggested add-ons</li>
          <li>Better table service integration with the "Find My Order" feature</li>
          <li>Improved data collection for menu optimization</li>
        </ul>
      </AnimatedCard>
    </PageContainer>
  );
};

export default KFC;