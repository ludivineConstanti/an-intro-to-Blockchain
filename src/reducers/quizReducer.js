import { STOCK_QUIZ } from 'src/actions/userActions';

const initialState = {
  currentQuizData: [],
  userQUizInfos: {
    currentQuestion: 1,
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
    default:
      return state;
  }
};
