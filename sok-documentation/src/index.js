import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Get the root DOM element
const container = document.getElementById('root');

// Create a root using the new React 18 API
const root = createRoot(container);

// Render the application with StrictMode for additional development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measurement
// You can pass a function to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint
reportWebVitals();