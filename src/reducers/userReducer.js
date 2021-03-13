import {
  CHANGE_VALUE_LOGIN,
  SAVE_USER_LOGIN,
  CHANGE_VALUE_REGISTER,
  SAVE_USER_REGISTER,
  LOGOUT,
  CHANGE_VALUE_SETTINGS,
  SAVE_USER_SETTINGS,
  SAVE_USER_EMAIL,
  ERROR_MESSAGE,
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
    controlPasswordDelete: '',
  },
  errors: {
    loginError: false,
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
        errors: {
          errorLogin: false,
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
          ...state.registerForm,
          firstname: '',
          lastname: '',
          password: '',
          controlPassword: '',
          email: '',
        },
        infos: {
          ...state.infos,
          id: action.id,
          firstname: action.firstname,
          lastname: action.lastname,
          isLoggedIn: true,
        },
        errors: {
          emailError: false,
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
          ...state.settingsForms,
          oldPassword: '',
          newPassword: '',
          controlNewPassword: '',
          newEmail: '',
          controlPassword: '',
        },
        errors: {
          incorrectPasswordError: false,
          newPasswordError: false,
        },
      };
    }
    case SAVE_USER_EMAIL: {
      return {
        ...state,
        settingsForms: {
          ...state.settingsForms,
          oldPassword: '',
          newPassword: '',
          controlNewPassword: '',
          newEmail: '',
          controlPassword: '',
        },
        errors: {
          incorrectPasswordError: false,
          emailError: false,
        },
      };
    }
    case ERROR_MESSAGE: {
      return {
        ...state,
        errors: {
          [action.name]: action.value,
        },
      };
    }
    default:
      return state;
  }
};
