// Import : package npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// Import : local
import App from 'src/containers/App';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(rootReactElement, document.getElementById('root'));
