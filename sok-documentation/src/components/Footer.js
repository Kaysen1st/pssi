import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import companyLogo from '../assets/images/company-logo.jpg';

const FooterContainer = styled.footer`
  grid-area: footer;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  padding: 1.5rem 2rem;
  z-index: 100;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FooterLogo = styled.img`
  height: 40px;
  width: auto;
`;

const CopyrightSection = styled.div`
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <FooterLogo src={companyLogo} alt="Company Logo" />
        </LogoSection>
        
        <CopyrightSection>
          © {currentYear} Pacific Sun Solutions Inc. All Rights Reserved.
        </CopyrightSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;