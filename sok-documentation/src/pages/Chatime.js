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

const Chatime = () => {
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
          Chatime Self-Ordering Kiosk
        </motion.h1>
      </PageHeader>
      
      <AnimatedCard>
        <h2>Overview</h2>
        <p>Chatime's innovative self-ordering kiosk represents a breakthrough in the bubble tea segment, offering an interactive drink customization experience where customers can precisely control sweetness levels, ice content, and topping combinations through an intuitive slider interface. The system's signature feature is its visual representation of the final product that updates in real-time as customers make selections, while also intelligently suggesting complementary flavor combinations based on previous order patterns, resulting in a 28% increase in average transaction value compared to traditional counter ordering.</p>
      </AnimatedCard>
      
      <KioskDemo
        title="Step-by-Step Guide to Using Chatime Self-Ordering Kiosk"
        steps={steps}
        videoUrl="https://youtube.com/shorts/FFZOc7ndiAk" // Replace with main demo video URL
      />
      
      <AnimatedCard delay={0.5}>
        <h2>Implementation Benefits</h2>
        <ul>
            <li>Reduced service time by 42% for complex customized bubble tea orders.</li>
            <li>Increased add-on sales with visual topping selection interface.</li>
            <li>Eliminated language barriers with multilingual ordering options.</li>
            <li>Enhanced customer satisfaction through precise sweetness and ice level control.</li>
            <li>Improved operational efficiency with real-time inventory management of tea bases and toppings.</li>
        </ul>
      </AnimatedCard>
    </PageContainer>
  );
};

export default Chatime;