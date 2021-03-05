import axios from 'axios';
import { LOGIN_REQUEST, saveUser, changeLoadingState } from 'src/actions/userActions';

import { baseUrl } from 'src/middlewares/baseUrl';

const user = (store) => (next) => (action) => {
  // switch (action.type) {
  //   case LOGIN_REQUEST: {
  //     store.dispatch(changeLoadingState(true));
  //     const state = store.getState();
  //     axios.post(`${baseUrl}/login`, {
  //       email: state.user.email,
  //       password: state.user.password,
  //     })
  //       .then((response) => {
  //         console.log(response);
  //         if (response.statusText === 'OK') {
  //           store.dispatch(saveUser(response.data.firstname, response.data.lastname));
  //         }
  //       })
  //       .finally(() => {
  //         store.dispatch(changeLoadingState(false));
  //       });
  //     break;
  //   }
  //   default:
  //     next(action);
  // }
  switch (action.type) {
    case LOGIN_REQUEST: {
      store.dispatch(changeLoadingState(true));
      const state = store.getState();
      axios.post(`${baseUrl}/login`, {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          console.log(response);
          if (response.statusText === 'OK') {
            const firstname = 'Pierre';
            const lastname = 'Dupont';
            store.dispatch(saveUser(firstname, lastname));
          }
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
