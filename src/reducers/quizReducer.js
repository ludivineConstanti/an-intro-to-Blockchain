import {
  STOCK_ONE_QUIZ,
  INCREASE_QUESTION,
  STOCK_ANSWER,
  VALIDATE_QUESTION,
  USER_FINISHED_QUIZ,
} from 'src/actions/quizzesActions';

const initialState = {
  currentQuizData: {},
  userQuizInfos: {
    questionNumber: 1,
    showAnswer: false,
    userAnswers: {},
    hasFinishedQuiz: false,
    score: 0,
    totalAnswers: 0,
    goodAnswers: 0,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_ONE_QUIZ: {
      return {
        ...state,
        currentQuizData: action.currentQuizData,
        userQuizInfos: {
          ...initialState.userQuizInfos,
          currentQuestionId: action.currentQuizData.idFirstQuestion,
        },
      };
    }
    case VALIDATE_QUESTION: {
      return {
        ...state,
        userQuizInfos: {
          ...state.userQuizInfos,
          showAnswer: true,
        },
      };
    }
    case INCREASE_QUESTION: {
      return {
        ...state,
        userQuizInfos: {
          ...state.userQuizInfos,
          showAnswer: false,
          questionNumber: action.questionNumber,
          currentQuestionId: state.userQuizInfos.currentQuestionId + 1,
        },
      };
    }
    case STOCK_ANSWER: {
      return {
        ...state,
        userQuizInfos: {
          ...state.userQuizInfos,
          userAnswers: {
            ...state.userQuizInfos.userAnswers,
            ...action.userAnswers,
          },
        },
      };
    }
    case USER_FINISHED_QUIZ: {
      return {
        ...state,
        userQuizInfos: {
          ...state.userQuizInfos,
          hasFinishedQuiz: true,
          score: action.score,
          totalAnswers: action.totalAnswers,
          goodAnswers: action.goodAnswers,
        },
      };
    }
    default:
      return state;
  }
};
