import {
  STOCK_QUIZ,
  INCREASE_QUESTION,
  STOCK_ANSWER,
  CONFIRM_QUESTION,
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
    case STOCK_QUIZ: {
      return {
        ...state,
        currentQuizData: action.currentQuizData,
      };
    }
    case CONFIRM_QUESTION: {
      return {
        ...state,
        userQuizInfos: {
          ...state.userQuizInfos,
          showAnswer: true,
        },
      };
    }
    case INCREASE_QUESTION: {
      console.log('NextQuestion');
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
