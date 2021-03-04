import { TOGGLE_MENU, CHANGE_LOADING_STATE } from '../actions/userActions';

const initialState = {
  language: 'english',
  open: false,
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      return {
        ...state,
        open: !state.open,
      };
    }
    case CHANGE_LOADING_STATE: {
      return {
        ...state,
        infos: {
          ...state.infos,
          isLoggedIn: true,
        },
      };
    }
    default:
      return state;
  }
};
