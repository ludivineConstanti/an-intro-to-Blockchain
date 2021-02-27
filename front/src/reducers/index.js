import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import userReducer from './userReducer';
import quizzesReducer from './quizzesReducer';
import quizReducer from './quizReducer';
import articlesReducer from './articlesReducer';

// We export the resukt of all the combined reducers
// to use it in createStore

export default combineReducers({
  global: globalReducer,
  user: userReducer,
  quizzes: quizzesReducer,
  quiz: quizReducer,
  articles: articlesReducer,
});

// Everything is combined in a new state
// with the imported reducers used
