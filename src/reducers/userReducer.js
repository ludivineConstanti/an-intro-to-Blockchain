import {
  CHANGE_INPUT_VALUE,
  SAVE_USER,
  LOGOUT,
  SAVE_USER_SETTINGS,
  ERROR_MESSAGE,
  SAVE_USER_SCORES,
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
    scoreAllQuiz: {},
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
    case CHANGE_INPUT_VALUE: {
      return {
        ...state,
        [action.object]: {
          ...state[action.object],
          [action.name]: action.value,
        },
      };
    }
    case SAVE_USER: {
      return {
        ...state,
        loginForm: {
          ...initialState.loginForm,
        },
        registerForm: {
          ...initialState.registerForm,
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
          emailError: false,
        },
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
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
          ...state.errors,
          incorrectPasswordError: false,
          newPasswordError: false,
          emailError: false,
        },
      };
    }
    case SAVE_USER_SCORES: {
      return {
        ...state,
        infos: {
          ...state.infos,
          scoreAllQuiz: action.scoreData,
        },
      };
    }
    case ERROR_MESSAGE: {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.name]: action.value,
        },
      };
    }
    default:
      return state;
  }
};
