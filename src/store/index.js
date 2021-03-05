import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import axiosUser from 'src/middlewares/axiosUser';
import axiosQuizzes from 'src/middlewares/axiosQuizzes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    axiosUser, axiosQuizzes,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
