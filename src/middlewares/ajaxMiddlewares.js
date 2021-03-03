import axios from 'axios';
import { LOGIN } from 'src/actions/userActions';

const baseUrl = 'https://apov6.herokuapp.com/v1';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // const state = store.getState();
      // axios.get(`${baseUrl}/quizzes/en`, {
      //   email: state.email,
      //   password: state.password,
      axios.get(`${baseUrl}/quizzes/en`)
        .then((response) => {
          console.log('response1', response);
          response.statusText === 'OK' && console.log('truc mais ça marche');
          // response.statusText === 'OK' && ;
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default user;
