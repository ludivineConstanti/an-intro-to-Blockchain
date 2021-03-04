import { CHANGE_VALUE, SAVE_USER, LOGOUT } from 'src/actions/userActions';

const initialState = {
  email: 'azerty@oclock.io',
  password: 'lesuperpasswordA45',
  name: '',
  infos: {
    isLoggedIn: false,
    firstname: '',
    lastname: '',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case SAVE_USER: {
      return {
        ...state,
        email: '',
        password: '',
        infos: {
          ...state.infos,
          isLoggedIn: true,
          firstname: action.firstname,
          lastname: action.lastname,
        },
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
