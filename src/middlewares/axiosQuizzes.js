// import axios from 'axios';
import axios from 'axios';
import { GET_ALL_QUIZZES, changeLoadingState, stockQuizzes } from 'src/actions/userActions';

import { baseUrl } from 'src/middlewares/baseUrl';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_QUIZZES: {
      store.dispatch(changeLoadingState(true));
      axios.get(`${baseUrl}/en/quizzes`)
        .then((response) => {
          if (response.statusText === 'OK') {
            console.log(response);
            store.dispatch(stockQuizzes(response.data));
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
