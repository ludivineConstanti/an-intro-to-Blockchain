import { TOGGLE_MENU } from '../actions/userActions';

const initialState = {
  language: 'english',
  open: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      return {
        ...state,
        open: !state.open,
      };
    }
    default:
      return state;
  }
};
