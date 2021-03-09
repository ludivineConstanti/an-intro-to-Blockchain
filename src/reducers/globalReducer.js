import { TOGGLE_MENU, CHANGE_VALUE_GLOBAL } from 'src/actions/appActions';

const initialState = {
  language: 'en',
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
    case CHANGE_VALUE_GLOBAL: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    default:
      return state;
  }
};
