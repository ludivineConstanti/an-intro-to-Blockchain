import axios from 'axios';
import { changeValueGlobal } from 'src/actions/appActions';
import {
  GET_ALL_ARTICLES,
  stockArticles,
  /* GET_ONE_QUIZ,

  stockQuiz, */
} from 'src/actions/articlesActions';

import articlesFormatter from 'src/middlewares/articlesFormatter';

import { baseUrl } from 'src/middlewares/baseUrl';

const user = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_ALL_ARTICLES: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      axios.get(`${baseUrl}/${state.global.language}/articles`)
        .then((response) => {
          if (response.statusText === 'OK') {
            const data = articlesFormatter(response.data);
            store.dispatch(stockArticles(data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(changeValueGlobal(false, 'loading'));
        });
      break;
    }
    /* case GET_ONE_QUIZ: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      axios.get(`${baseUrl}/${state.global.language}/quiz/${action.id}`)
        .then((response) => {
          if (response.statusText === 'OK') {
            const quizData = quizFormatter(response.data);
            store.dispatch(stockQuiz(quizData));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(changeValueGlobal(false, 'loading'));
        });
      break;
    } */
    default:
      next(action);
  }
};

export default user;
