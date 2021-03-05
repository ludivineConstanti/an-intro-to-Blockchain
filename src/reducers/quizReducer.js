import { STOCK_QUIZ } from 'src/actions/userActions';

const initialState = {
  quiz: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_QUIZ: {
      return {
        ...state,
        quiz: action.quiz,
      };
    }
    default:
      return state;
  }
};
