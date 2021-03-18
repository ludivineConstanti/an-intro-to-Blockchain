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

const user = (store) => (next) => async (action) => {
  const state = store.getState();

  switch (action.type) {
    case GET_ALL_QUIZZES: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      try {
        const quizResponse = await axios.get(`${baseUrl}/${state.global.language}/quizzes`);
        const quizFormatted = quizzesFormatter(quizResponse.data);
        if (state.user.infos.isLoggedIn) {
          const scoreResponse = await axios.get(`${baseUrl}/score/${state.user.infos.id}`);
          const scoreFormatted = [];
          Object.keys(scoreResponse.data).map((element) => (
            scoreFormatted.push(scoreResponse.data[element])
          ));
          Object.keys(quizFormatted).forEach((name) => {
            quizFormatted[name].forEach((element) => {
              const result = scoreFormatted.find((oneQuiz) => (oneQuiz.quizId === element.quiz_id));
              if (result) {
                element.score = result.scoreQuiz;
                element.done = true;
              }
              else {
                element.score = 0;
                element.done = false;
              }
            });
          });
        }
        store.dispatch(stockAllQuizzes(quizFormatted));
      }
      finally {
        store.dispatch(changeValueGlobal(false, 'loading'));
      }
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
        // ? Message d'erreur à mettre ici
        .finally(() => {
          store.dispatch(changeValueGlobal(false, 'loading'));
        });
      break;
    }

    case VALIDATE_QUIZ: {
      store.dispatch(changeValueGlobal(true, 'loading'));

      axios.put(`${baseUrl}/score`, {
        userId: state.user.infos.id,
        quizId: state.quiz.currentQuizData.id,
        scoreQuiz: state.quiz.userQuizInfos.score,
      })
        // ? Message d'erreur à mettre ici
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
