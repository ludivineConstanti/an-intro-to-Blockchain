import { CHANGE_VALUE, LOGIN, CHANGE_LOADING_STATE } from 'src/actions/userActions';

const initialState = {
  email: '',
  password: '',
  isLoggedIn: false,
  firstName: '',
  lastName: '',
  name: '',
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case CHANGE_LOADING_STATE: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    default:
      return state;
  }
};
