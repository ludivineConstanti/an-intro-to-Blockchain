import axios from 'axios';
import {
  LOGIN_REQUEST,
  saveUser,
  changeLoadingState,
  REGISTER_REQUEST,
  saveRegister,
} from 'src/actions/userActions';

const baseUrl = 'https://apov7.herokuapp.com';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      store.dispatch(changeLoadingState(true));
      const state = store.getState();
      axios.post(`${baseUrl}/login`, {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(saveUser(response.data.firstname, response.data.lastname));
          }
        })
        .finally(() => {
          store.dispatch(changeLoadingState(false));
        });
      break;
    }
    case REGISTER_REQUEST: {
      const state = store.getState();
      console.log(state);
      axios({
        method: 'post',
        url: `${baseUrl}/register`,
        data: {
          firstname: state.user.infos.firstname,
          lastname: state.user.infos.lastname,
          email: state.user.email,
          password: state.user.password,
        },
      })
        .then((response) => {
          console.log('response then register', response);
          if (response.statusText === 'OK') {
            store.dispatch(saveRegister());
          }
        })
        .catch((error) => {
          console.log('error', error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default user;
