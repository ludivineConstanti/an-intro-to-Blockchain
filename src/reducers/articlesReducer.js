import {
  STOCK_ARTICLES,
} from 'src/actions/articlesActions';

const initialState = {
  currentArticlesData: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_ARTICLES: {
      return {
        ...state,
        currentArticlesData: action.payload,
      };
    }
    default:
      return state;
  }
};
