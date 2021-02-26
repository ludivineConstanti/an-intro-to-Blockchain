// Import : package npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Import : local
import App from 'src/components/App';

const rootReactElement = (
  <Router>
    <App />
  </Router>
);

// First and Main render
render(rootReactElement, document.getElementById('root'));
