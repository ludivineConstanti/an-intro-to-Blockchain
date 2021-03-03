import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import ajaxMiddlewares from 'src/middlewares/ajaxMiddlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ajaxMiddlewares),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
