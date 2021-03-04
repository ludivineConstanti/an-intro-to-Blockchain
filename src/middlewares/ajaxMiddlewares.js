import axios from 'axios';
import { SEND_LOGIN, login, changeLoadingState } from 'src/actions/userActions';

const baseUrl = 'https://apov6.herokuapp.com/v1';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_LOGIN: {
      store.dispatch(changeLoadingState(true));
      // const state = store.getState();
      // axios.get(`${baseUrl}/quizzes/en`, {
      //   email: state.email,
      //   password: state.password,
      axios.get(`${baseUrl}/quizzes/en`)
        .then((response) => {
          console.log('response1', response);
          if (response.statusText === 'OK') {
            console.log('Connexion réussi');
            store.dispatch(login());
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
