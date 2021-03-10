import axios from 'axios';
import { changeValueGlobal } from 'src/actions/appActions';
import {
  GET_ALL_QUIZZES,
  GET_ONE_QUIZ,
  VALIDATE_QUIZ,
  stockAllQuizzes,
  stockOneQuiz,
  userFinishedQuiz,
} from 'src/actions/quizzesActions';

import quizFormatter from 'src/middlewares/QuizFormatter';

import { baseUrl } from 'src/middlewares/baseUrl';

const user = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_ALL_QUIZZES: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      axios.get(`${baseUrl}/${state.global.language}/quizzes`)
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(stockAllQuizzes(response.data));
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

    case GET_ONE_QUIZ: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      axios.get(`${baseUrl}/${state.global.language}/quiz/${action.id}`)
        .then((response) => {
          if (response.statusText === 'OK') {
            const quizData = quizFormatter(response.data);
            store.dispatch(stockOneQuiz(quizData));
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
    case VALIDATE_QUIZ: {
      if (state.quiz.currentQuizData.infos) {
        if (state.quiz.userQuizInfos.questionNumber
          === state.quiz.currentQuizData.infos.totalQuestions) {
          const quizData = state.quiz.currentQuizData;
          const { userAnswers } = state.quiz.userQuizInfos;
          let goodAnswer = 0;
          for (let i = 1; i < quizData.infos.totalQuestions + 1; i += 1) {
            for (let y = 1; y < quizData[`question${i}`].totalAnswer + 1; y += 1) {
              if (quizData[`question${i}`][`answer${y}`].goodAnswer === userAnswers[`question${quizData[`question${i}`].id}`][`answer${quizData[`question${i}`][`answer${y}`].id}`]) {
                goodAnswer += 1;
              }
            }
          }
          const score = Math.round(goodAnswer / quizData.infos.totalAnswer * 100);
          console.log(`${goodAnswer} bonnes réponses sur ${quizData.infos.totalAnswer}, soit ${score}% de bonnes réponses.`);
          store.dispatch(userFinishedQuiz(score, quizData.infos.totalAnswer, goodAnswer));
        }
      }
      break;
    }
    default:
      next(action);
  }
};

export default user;
