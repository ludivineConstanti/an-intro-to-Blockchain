import {
  CHANGE_VALUE_LOGIN,
  CHANGE_VALUE_REGISTER,
  SAVE_USER_LOGIN,
  LOGOUT,
  SAVE_USER_REGISTER,
} from 'src/actions/userActions';

const initialState = {
  loginForm: {
    email: 'abc@gmail.com',
    password: 'Kikiki10',
  },
  registerForm: {
    firstname: 'Zinedine',
    lastname: 'Tzigane',
    password: 'Password1',
    controlPassword: 'Password1',
    email: 'bernard@gmail.com',
  },
  infos: {
    isLoggedIn: false,
    firstname: '',
    lastname: '',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_LOGIN: {
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.name]: action.value,
        },
      };
    }
    case CHANGE_VALUE_REGISTER: {
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.name]: action.value,
        },
      };
    }
    case SAVE_USER_LOGIN: {
      return {
        ...state,
        loginForm: {
          email: '',
          password: '',
        },
        infos: {
          ...state.infos,
          firstname: action.firstname,
          lastname: action.lastname,
          isLoggedIn: true,
        },
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
      };
    }
    case SAVE_USER_REGISTER: {
      return {
        ...state,
        registerForm: {
          firstname: '',
          lastname: '',
          password: '',
          controlPassword: '',
          email: '',
        },
        infos: {
          ...state.infos,
          ...action.user,
          firstname: action.firstname,
          lastname: action.lastname,
          isLoggedIn: true,
        },
      };
    }
    default:
      return state;
  }
};
