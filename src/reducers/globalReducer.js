import { TOGGLE_MENU, CHANGE_LOADING_STATE, FORM_SUBMIT } from '../actions/userActions';

const initialState = {
  language: 'english',
  menuOpen: false,
  loading: false,
  formSubmit: false,
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
    case FORM_SUBMIT: {
      return {
        ...state,
        formSubmit: true,
      };
    }
    default:
      return state;
  }
};
