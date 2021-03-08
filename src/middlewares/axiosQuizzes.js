import axios from 'axios';
import { changeLoadingState } from 'src/actions/appActions';
import {
  GET_ALL_QUIZZES,
  GET_ONE_QUIZ,
  stockQuizzes,
  stockQuiz,
} from 'src/actions/quizzesActions';

import quizFormatter from 'src/middlewares/QuizFormatter';

import { baseUrl } from 'src/middlewares/baseUrl';

const user = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_ALL_QUIZZES: {
      store.dispatch(changeLoadingState(true));
      axios.get(`${baseUrl}/${state.global.language}/quizzes`)
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(stockQuizzes(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(changeLoadingState(false));
        });
      break;
    }
    case GET_ONE_QUIZ: {
      store.dispatch(changeLoadingState(true));
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
          store.dispatch(changeLoadingState(false));
        });
      break;
    }
    default:
      next(action);
  }
};

export default user;
