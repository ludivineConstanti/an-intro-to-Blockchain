// Import : package npm
import React, { Suspense } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// Import : local
import App from 'src/containers/App';
import store from 'src/store';
import Loading from 'src/components/Loading';
import i18next from 'src/i18next';

const rootReactElement = (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </Router>
  </Provider>
);

// render(rootReactElement, document.getElementById('root'));

const root = ReactDOM.unstable_createRoot(document.getElementById('root'));
root.render(rootReactElement);
