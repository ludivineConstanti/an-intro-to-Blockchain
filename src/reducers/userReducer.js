import { CHANGE_VALUE, LOGIN } from 'src/actions/userActions';

const initialState = {
  email: '',
  password: '',
  isLoggedIn: false,
  firstName: 'captain',
  lastName: 'nemo',
  name: '',
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
    default:
      return state;
  }
};
