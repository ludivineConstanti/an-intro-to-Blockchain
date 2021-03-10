import axios from 'axios';
import { changeValueGlobal } from 'src/actions/appActions';
import {
  LOGIN_REQUEST,
  saveUserLogin,
  REGISTER_REQUEST,
  saveUserRegister,
  CHANGE_USER_SETTINGS,
  saveUserSettings,
  CHANGE_USER_EMAIL,
  saveUserEmail,
  DELETE_ACCOUNT_REQUEST,
  logout,
} from 'src/actions/userActions';

import { baseUrl } from 'src/middlewares/baseUrl';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      const state = store.getState();
      axios.post(`${baseUrl}/login`, {
        email: state.user.loginForm.email,
        password: state.user.loginForm.password,
      })
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(saveUserLogin(response.data.id, response.data.firstname,
              response.data.lastname));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(changeValueGlobal(false, 'loading'));
        });
      break;
    }
    case REGISTER_REQUEST: {
      store.dispatch(changeValueGlobal(true, 'loading'));
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
            store.dispatch(saveUserRegister(response.data.id, response.data.firstname,
              response.data.lastname));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(changeValueGlobal(false, 'loading'));
        });
      break;
    }
    case CHANGE_USER_SETTINGS: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      const state = store.getState();
      axios({
        method: 'patch',
        url: `${baseUrl}/settings/user/${state.user.infos.id}`,
        data: {
          firstname: state.user.infos.firstname,
          lastname: state.user.infos.lastname,
          password: state.user.settingsForms.oldPassword,
          newPassword: state.user.settingsForms.newPassword,
        },
      })
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(saveUserSettings());
            console.log('response', response);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(changeValueGlobal(false, 'loading'));
        });
      break;
    }
    case CHANGE_USER_EMAIL: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      const state = store.getState();
      axios({
        method: 'patch',
        url: `${baseUrl}/settings/email/${state.user.infos.id}`,
        data: {
          email: state.user.settingsForms.newEmail,
          password: state.user.settingsForms.controlPassword,
        },
      })
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(saveUserEmail());
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(changeValueGlobal(false, 'loading'));
        });
      break;
    }
    case DELETE_ACCOUNT_REQUEST: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      const state = store.getState();
      console.log('state delete account', state);
      axios({
        method: 'delete',
        url: `${baseUrl}/settings/delete/${state.user.infos.id}`,
        data: {
          password: state.user.settingsForms.controlPasswordDelete,
        },
      })
        .then((response) => {
          if (response.statusText === 'OK') {
            store.dispatch(logout());
          }
          console.log('response', response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(changeValueGlobal(false, 'loading'));
        });
      break;
    }
    default:
      next(action);
  }
};

export default user;
