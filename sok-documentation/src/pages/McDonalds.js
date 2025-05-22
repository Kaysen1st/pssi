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

const McDonalds = () => {
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
          McDonald's Self-Ordering Kiosk
        </motion.h1>
      </PageHeader>
      
      <AnimatedCard>
        <h2>Overview</h2>
        <p>McDonald's self-ordering kiosks represent one of the most well-implemented digital ordering systems in the fast-food industry. These kiosks feature intuitive touch interfaces, multilingual support, and streamlined customization options that have dramatically improved the customer ordering experience while reducing wait times.</p>
        <p>The McDonald's implementation is particularly notable for its accessible design, detailed nutrition information, and seamless integration with their kitchen management systems.</p>
      </AnimatedCard>
      
      <KioskDemo
        title="Step-by-Step Guide to Using McDonald's Self-Ordering Kiosk"
        steps={steps}
        videoUrl="https://youtube.com/shorts/aGgO68AskD4" // Replace with main demo video URL
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

export default McDonalds;