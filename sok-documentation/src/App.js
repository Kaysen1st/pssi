import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import McDonalds from './pages/McDonalds';
import Jollibee from './pages/Jollibee';
import KFC from './pages/KFC';
import Chatime from './pages/Chatime';
import BosCoffee from './pages/BosCoffee';
import Chowking from './pages/Chowking';
import AllDaySupermarket from './pages/AllDaySupermarket';

const theme = {
  colors: {
    primary: '#4285F4',
    secondary: '#34A853',
    accent: '#FBBC05',
    danger: '#EA4335',
    light: '#FFFFFF',
    dark: '#202124',
    gray: '#5F6368',
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Roboto', sans-serif",
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  }
};
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/mcdonalds" element={<McDonalds />} />
        <Route path="/jollibee" element={<Jollibee />} />
        <Route path="/kfc" element={<KFC />} />
        <Route path="/chatime" element={<Chatime />} />
        <Route path="/bos-coffee" element={<BosCoffee />} />
        <Route path="/chowking" element={<Chowking />} />
        <Route path="/allday-supermarket" element={<AllDaySupermarket />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="app-layout">
          <Header />
          <Sidebar />
          <div className="content-container">
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;