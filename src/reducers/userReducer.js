import { CHANGE_VALUE, SAVE_USER } from 'src/actions/userActions';

const initialState = {
  email: '',
  password: '',
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
        infos: {
          ...state.infos,
          isLoggedIn: true,
          firstname: action.firstname,
          lastname: action.lastname,
        },
      };
    }
    default:
      return state;
  }
};
