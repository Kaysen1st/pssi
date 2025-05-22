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

const AllDaySupermarket = () => {
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
          AllDay Supermarket Self-Ordering Kiosk
        </motion.h1>
      </PageHeader>
      
      <AnimatedCard>
        <h2>Overview</h2>
        <p>AllDay Supermarket's self-ordering kiosk for their prepared foods section represents retail innovation in the Philippine grocery landscape, featuring a touchscreen interface that allows customers to customize ready-to-eat meals and schedule pickup times throughout their shopping journey. The system integrates with AllDay's inventory and kitchen management software to provide real-time availability updates and reduce food waste by 33%, while also collecting valuable consumer preference data that has enabled the supermarket to optimize their prepared food offerings based on hyperlocal neighborhood preferences, creating a uniquely personalized grocery experience.</p>
      </AnimatedCard>
      
      <KioskDemo
        title="Step-by-Step Guide to Using AllDay Supermarket Self-Ordering Kiosk"
        steps={steps}
        videoUrl="https://youtu.be/TB2644ErRnE?si=6Vq9RKCf5-ADvm8t" // Replace with main demo video URL
      />
      
      <AnimatedCard delay={0.5}>
        <h2>Implementation Benefits</h2>
        <ul>
          <li>33% reduction in prepared food waste through optimized inventory management</li>
          <li>Improved kitchen staffing efficiency with scheduled pickup times</li>
          <li>Enhanced data collection for hyperlocal product development</li>
          <li>Increased customer dwell time and potential for additional purchases</li>
          <li>Seamless integration with multiple payment methods including e-wallets</li>
        </ul>
      </AnimatedCard>
    </PageContainer>
  );
};

export default AllDaySupermarket;