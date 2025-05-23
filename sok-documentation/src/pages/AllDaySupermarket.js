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
          AllDay Supermarket Smart Cart
        </motion.h1>
      </PageHeader>
      
      <AnimatedCard>
        <h2>Overview</h2>
        <p>AllDay Supermarket's Smart Cart system represents a transformative retail technology implementation in the Philippine grocery landscape, featuring integrated sensors and computer vision that automatically detect and track items as customers place them in or remove them from their cart throughout their shopping journey. 
          The system seamlessly integrates with AllDay's backend inventory management and payment processing infrastructure to provide real-time price calculations and stock updates, while the collected shopping behavior data enables optimization of store layouts and product placement strategies. 
          This implementation demonstrates measurable business impact with potential queue time reductions of up to 40% while maintaining transaction accuracy above 99.5%, establishing new benchmarks for automated retail experiences in the region and creating a foundation for future AI-driven shopping innovations.</p>
      </AnimatedCard>
      
      <KioskDemo
        title="Step-by-Step Guide to Using AllDay Supermarket Smart Cart"
        steps={steps}
        videoUrl="https://youtu.be/TB2644ErRnE?si=6Vq9RKCf5-ADvm8t" // Replace with main demo video URL
      />
      
      <AnimatedCard delay={0.5}>
        <h2>Implementation Benefits</h2>
        <ul>
          <li> 40% reduction in checkout queue times through automated item scanning and payment processing </li>
          <li> Enhanced inventory accuracy with real-time stock updates and automatic replenishment triggers </li>
          <li> Improved loss prevention through integrated weight sensors and AI-powered anomaly detection </li>
          <li> Increased customer satisfaction scores by eliminating manual barcode scanning friction points </li>
          <li> Valuable shopping behavior analytics enabling data-driven store layout optimization </li>
          <li> Reduced labor costs with fewer cashiers needed during peak shopping hours </li>
          <li> Seamless integration with existing POS systems and payment gateways </li>
          <li> Higher transaction accuracy rate of 99.5% compared to traditional checkout methods </li>
          <li> Enhanced customer privacy with contactless shopping experience </li>
          <li> Scalable infrastructure supporting future AI-driven retail innovations </li>
        </ul>
      </AnimatedCard>
    </PageContainer>
  );
};

export default AllDaySupermarket;