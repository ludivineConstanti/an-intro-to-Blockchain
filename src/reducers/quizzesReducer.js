import { STOCK_QUIZZES } from 'src/actions/userActions';

const initialState = {
  quizzesList: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_QUIZZES: {
      return {
        ...state,
        quizzesList: action.quizzes,
      };
    }
    default:
      return state;
  }
};
