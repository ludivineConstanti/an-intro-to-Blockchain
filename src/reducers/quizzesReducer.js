import { STOCK_ALL_QUIZZES } from 'src/actions/quizzesActions';

const initialState = {
  quizzesList: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_ALL_QUIZZES: {
      return {
        ...state,
        quizzesList: action.quizzes,
      };
    }
    default:
      return state;
  }
};
