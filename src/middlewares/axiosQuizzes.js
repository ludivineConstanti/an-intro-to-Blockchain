import axios from 'axios';
import { changeValueGlobal } from 'src/actions/appActions';
import {
  GET_ALL_QUIZZES,
  GET_ONE_QUIZ,
  VALIDATE_QUIZ,
  stockAllQuizzes,
  stockOneQuiz,
} from 'src/actions/quizzesActions';

import quizzesFormatter from 'src/middlewares/quizzesFormatter';
import quizFormatter from 'src/middlewares/quizFormatter';

import { baseUrl } from 'src/middlewares/baseUrl';

const user = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case GET_ALL_QUIZZES: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      axios.get(`${baseUrl}/${state.global.language}/quizzes`)
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(stockAllQuizzes(quizzesFormatter(response.data)));
          }
        })
        //! ERROR
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data.error);
          }
          else {
            console.log('Error', error.message);
          }
        })
        .finally(() => {
          store.dispatch(changeValueGlobal(false, 'loading'));
        });
      break;
    }

    case GET_ONE_QUIZ: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      axios.get(`${baseUrl}/${state.global.language}/quiz/${action.id}`)
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(stockOneQuiz(quizFormatter(response.data)));
          }
        })
        //! ERROR
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data.error);
          }
          else {
            console.log('Error', error.message);
          }
        })
        .finally(() => {
          store.dispatch(changeValueGlobal(false, 'loading'));
        });
      break;
    }

    case VALIDATE_QUIZ: {
      store.dispatch(changeValueGlobal(true, 'loading'));

      axios.put(`${baseUrl}/score`, {
        quizId: state.user.infos.quizId,
        userId: state.quiz.currentQuizData.infos.id,
        scoreQuiz: state.quiz.userQuizInfos.score,
      }).then((response) => {
        console.log(response);
      })
      //! ERROR
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data.error);
          }
          else {
            console.log('Error', error.message);
          }
        })
        .finally(() => {
          store.dispatch(changeValueGlobal(false, 'loading'));
        });
      break;
    }

    default:
      next(action);
  }
};

export default user;
