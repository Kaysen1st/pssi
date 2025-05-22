import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const SidebarContainer = styled.aside`
  grid-area: sidebar;
  background-color: #f8f9fa;
  min-height: 100vh; /* Ensure full height */
  width: 250px;
  border-right: 1px solid #e1e4e8;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.1);
  position: fixed; /* Make it fixed on the left side */
  left: 0;
  top: 70px; /* Adjust based on header height */
  bottom: 0;
  overflow-y: auto; /* Enable scrolling for long menus */
  z-index: 10;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none; /* Hide on mobile */
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled(motion.li)`
  margin: 0;
  border-bottom: 1px solid #eaecef;
  
  &:first-child {
    border-top: 1px solid #eaecef;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 1rem 1.5rem;
  color: #24292e;
  transition: all 0.2s ease;
  font-weight: 500;
  font-size: 0.95rem;
  
  &:hover {
    background-color: rgba(66, 133, 244, 0.1);
    color: #0366d6;
    text-decoration: none;
  }
  
  &.active {
    background-color: #f1f8ff;
    color: #0366d6;
    font-weight: 600;
    border-left: 3px solid #0366d6;
  }
`;

const navItems = [
  { path: '/', name: 'Overview' },
  { path: '/mcdonalds', name: 'McDonald\'s' },
  { path: '/jollibee', name: 'Jollibee' },
  { path: '/kfc', name: 'KFC' },
  { path: '/chatime', name: 'Chatime' },
  { path: '/bos-coffee', name: 'Bo\'s Coffee' },
  { path: '/chowking', name: 'Chowking' },
  { path: '/allday-supermarket', name: 'AllDay Supermarket PH' },
];

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavList
        as={motion.ul}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item) => (
          <NavItem key={item.path} variants={itemVariants}>
            <StyledNavLink to={item.path} end={item.path === '/'}>
              {item.name}
            </StyledNavLink>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;