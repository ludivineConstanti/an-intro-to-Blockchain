import {
  STOCK_ONE_QUIZ,
  INCREASE_QUESTION,
  STOCK_ANSWER,
  VALIDATE_QUESTION,
} from 'src/actions/quizzesActions';

const initialState = {
  currentQuizData: [],
  userQuizInfos: {
    questionNumber: 1,
    showAnswer: false,
    userResponses: {},
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
        },
      };
    }
    case STOCK_ANSWER: {
      return {
        ...state,
        userQuizInfos: {
          ...state.userQuizInfos,
          userResponses: {
            ...state.userQuizInfos.userResponses,
            [`question${action.questionNumber}`]: action.userAnswers,
          },
        },
      };
    }
    default:
      return state;
  }
};
