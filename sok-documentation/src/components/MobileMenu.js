import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.light};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 110;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MenuOverlay = styled(motion.div)`
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.dark};
  z-index: 100;
  padding: 2rem;
  padding-top: 1rem;
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MobileNavItem = styled(motion.li)`
  margin-bottom: 1rem;
`;

const MobileNavLink = styled(NavLink)`
  display: block;
  padding: 1rem;
  color: ${props => props.theme.colors.light};
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  border-radius: 8px;
  
  &.active {
    background-color: ${props => props.theme.colors.primary};
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

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </MenuButton>
      
      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavList>
              {navItems.map((item, index) => (
                <MobileNavItem
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MobileNavLink 
                    to={item.path} 
                    end={item.path === '/'} 
                    onClick={closeMenu}
                  >
                    {item.name}
                  </MobileNavLink>
                </MobileNavItem>
              ))}
            </MobileNavList>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;