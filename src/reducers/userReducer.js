import {
  CHANGE_VALUE,
  SAVE_USER,
  LOGOUT,
  SAVE_REGISTER,
} from 'src/actions/userActions';

const initialState = {
  email: 'satanas@oclock.io',
  password: 'lesuperpasswordA45',
  controlPassword: 'lesuperpasswordA45',
  name: '',
  infos: {
    isLoggedIn: false,
    firstname: 'Michel',
    lastname: 'Lartignan',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
        infos: {
          ...state.infos,
          [action.name]: action.value,
        },
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
    case SAVE_REGISTER: {
      return {
        ...state,
        email: '',
        password: '',
        controlPassword: '',
        infos: {
          ...state.infos,
          ...state.user,
        },
      };
    }
    default:
      return state;
  }
};
