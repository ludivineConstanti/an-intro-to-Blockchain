import { TOGGLE_MENU, CHANGE_LOADING_STATE } from '../actions/userActions';

const initialState = {
  language: 'fr',
  menuOpen: false,
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    }
    case CHANGE_LOADING_STATE: {
      return {
        ...state,
        loading: action.value,
      };
    }
    default:
      return state;
  }
};
