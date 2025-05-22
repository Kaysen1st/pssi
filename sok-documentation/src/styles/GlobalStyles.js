import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    overflow-x: hidden;
  }
  
  body {
    font-family: ${props => props.theme.fonts.body};
    background-color: #f9f9f9;
    color: ${props => props.theme.colors.dark};
    line-height: 1.6;
  }
  
  /* Layout Structure */
  .app-layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 250px 1fr;
    grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
    min-height: 100vh;
  }
  
  .content-container {
    grid-area: content;
    padding: 2rem;
    margin-left: 250px; /* Match sidebar width */
    min-height: calc(100vh - 70px - 80px); /* Adjust based on header/footer heights */
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: ${props => props.theme.transitions.default};
    
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
  
  /* Responsive Adjustments */
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    .content-container {
      margin-left: 0;
      padding: 1.5rem;
    }
  }
`;

export default GlobalStyles;