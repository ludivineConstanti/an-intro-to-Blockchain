import {
  CHANGE_VALUE_LOGIN,
  SAVE_USER_LOGIN,
  CHANGE_VALUE_REGISTER,
  SAVE_USER_REGISTER,
  LOGOUT,
  CHANGE_VALUE_SETTINGS,
  SAVE_USER_SETTINGS,
  SAVE_USER_EMAIL,
  DELETE_USER,
} from 'src/actions/userActions';

const initialState = {
  loginForm: {
    email: '',
    password: '',
  },
  registerForm: {
    firstname: '',
    lastname: '',
    password: '',
    controlPassword: '',
    email: '',
  },
  infos: {
    isLoggedIn: false,
    firstname: '',
    lastname: '',
  },
  settingsForms: {
    oldPassword: '',
    newPassword: '',
    controlNewPassword: '',
    newEmail: '',
    controlPassword: '',
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
    case SAVE_USER_LOGIN: {
      return {
        ...state,
        loginForm: {
          email: '',
          password: '',
        },
        infos: {
          ...state.infos,
          id: action.id,
          firstname: action.firstname,
          lastname: action.lastname,
          isLoggedIn: true,
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
    case CHANGE_VALUE_SETTINGS: {
      return {
        ...state,
        settingsForms: {
          ...state.settingsForms,
          [action.name]: action.value,
        },
      };
    }
    case SAVE_USER_SETTINGS: {
      return {
        ...state,
        settingsForms: {
          newPassword: action.newPassword,
        },
      };
    }
    case SAVE_USER_EMAIL: {
      return {
        ...state,
        settingsForms: {
          newEmail: action.newEmail,
        },
      };
    }
    case DELETE_USER: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
