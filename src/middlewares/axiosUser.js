import axios from 'axios';
import { changeLoadingState } from 'src/actions/appActions';
import {
  LOGIN_REQUEST,
  saveUserLogin,
  REGISTER_REQUEST,
  saveUserRegister,
  CHANGE_SETTINGS_REQUEST,
  saveUserSettings,
} from 'src/actions/userActions';

import { baseUrl } from 'src/middlewares/baseUrl';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      store.dispatch(changeLoadingState(true));
      const state = store.getState();
      axios.post(`${baseUrl}/login`, {
        email: state.user.loginForm.email,
        password: state.user.loginForm.password,
      })
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(saveUserLogin(response.data.firstname,
              response.data.lastname));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(changeLoadingState(false));
        });
      break;
    }
    case REGISTER_REQUEST: {
      store.dispatch(changeLoadingState(true));
      const state = store.getState();
      axios({
        method: 'post',
        url: `${baseUrl}/register`,
        data: {
          firstname: state.user.registerForm.firstname,
          lastname: state.user.registerForm.lastname,
          email: state.user.registerForm.email,
          password: state.user.registerForm.password,
        },
      })
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(saveUserRegister(response.data.firstname,
              response.data.lastname));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(changeLoadingState(false));
        });
      break;
    }
    case CHANGE_SETTINGS_REQUEST: {
      store.dispatch(changeLoadingState(true));
      const state = store.getState();
      console.log('state', state);
      axios({
        method: 'patch',
        url: `${baseUrl}/settings/user/9`,
        data: {
          email: state.user.settingsForms.newEmail,
          password: state.user.settingsForms.newPassword,
        },
      })
        .then((response) => {
          if (response.statusText === 'OK') {
            console.log('response', response);
            store.dispatch(saveUserSettings(response.data.email,
              response.data.password));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(changeLoadingState(false));
        });
      break;
    }
    default:
      next(action);
  }
};

export default user;
