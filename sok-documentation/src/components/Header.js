import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import companyLogo from '../assets/images/company-logo.jpg';
import MobileMenu from './MobileMenu';

const HeaderContainer = styled.header`
  grid-area: header;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  padding: 1rem 2rem;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
`;

const SiteTitle = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  
  a {
    color: ${props => props.theme.colors.light};
    
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LogoImage 
            src={companyLogo} 
            alt="Company Logo"
          />
          <SiteTitle>
            <Link to="/">Self-Ordering Kiosk Documentation</Link>
          </SiteTitle>
        </LogoContainer>
        
        <MobileMenu />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;