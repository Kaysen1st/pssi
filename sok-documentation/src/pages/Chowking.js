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

const Chowking = () => {
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
          Chowking Self-Ordering Kiosk
        </motion.h1>
      </PageHeader>
      
      <AnimatedCard>
        <h2>Overview</h2>
        <p>Chowking's dual-language self-ordering kiosk masterfully balances Filipino-Chinese culinary traditions through an interface that guides customers through their diverse menu categories, from dim sum to rice meals, with culturally relevant visual cues. The system employs intelligent bundling algorithms that suggest complementary items based on traditional Chinese meal composition principles, while its streamlined payment system integrates seamlessly with local payment methods including GCash and PayMaya, helping reduce average transaction times by 47% while increasing average order value by 23%.</p>
      </AnimatedCard>
      
      <KioskDemo
        title="Step-by-Step Guide to Using Chowking Self-Ordering Kiosk"
        steps={steps}
        videoUrl="https://www.youtube.com/watch?v=maindemo" // Replace with main demo video URL
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

export default Chowking;