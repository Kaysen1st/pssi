import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedCard from '../components/AnimatedCard';

const HomePage = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Hero = styled(motion.section)`
  text-align: center;
  margin: 3rem 0;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.gray};
  margin-bottom: 2rem;
`;

const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const BrandCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  
  h3 {
    margin-bottom: 1rem;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const BrandLogo = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const CTAButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(66, 133, 244, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(52, 168, 83, 0.4);
  }
`;

const brands = [
  { name: "McDonald's", path: "/mcdonalds", initial: "M" },
  { name: "Jollibee", path: "/jollibee", initial: "J" },
  { name: "KFC", path: "/kfc", initial: "K" },
  { name: "Chatime", path: "/chatime", initial: "C" },
  { name: "Bo's Coffee", path: "/bos-coffee", initial: "B" },
  { name: "Chowking", path: "/chowking", initial: "C" },
  { name: "AllDay Supermarket PH", path: "/allday-supermarket", initial: "A" },
];

const Home = () => {
  return (
    <HomePage>
      <Hero
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          Self-Ordering Kiosk Documentation
        </motion.h1>
        <Subtitle
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A comprehensive guide to self-ordering kiosk implementations across various establishments in the Philippines
        </Subtitle>
      </Hero>
      
      <AnimatedCard>
        <section>
          <h2>About This Documentation</h2>
          <p>This documentation provides detailed information about self-ordering kiosk systems implemented by various food chains and retailers in the Philippines. Each section contains step-by-step procedures, videos, and implementation details to help you understand how these systems work.</p>
          <p>Self-ordering kiosks improve customer experience by reducing wait times, increasing order accuracy, and freeing up staff to focus on other aspects of service. They have become increasingly popular in fast food restaurants, cafes, and retail establishments.</p>
        </section>
      </AnimatedCard>
      
      <h2>Featured Establishments</h2>
      <BrandsGrid>
        {brands.map((brand, index) => (
          <Link to={brand.path} key={brand.name}>
            <BrandCard
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <BrandLogo>{brand.initial}</BrandLogo>
              <h3>{brand.name}</h3>
              <CTAButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Documentation
              </CTAButton>
            </BrandCard>
          </Link>
        ))}
      </BrandsGrid>
    </HomePage>
  );
};

export default Home;