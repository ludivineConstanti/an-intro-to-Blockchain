import axios from 'axios';
import { changeValueGlobal } from 'src/actions/appActions';
import {
  GET_ALL_ARTICLES,
  stockArticles,
} from 'src/actions/articlesActions';

import articlesFormatter from 'src/middlewares/articlesFormatter';

import { baseUrl } from 'src/middlewares/baseUrl';

const user = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_ALL_ARTICLES: {
      store.dispatch(changeValueGlobal(true, 'loading'));
      axios.get(`${baseUrl}/${state.global.language}/articles`)
        .then((response) => {
          if (response.statusText === 'OK') {
            const data = articlesFormatter(response.data);
            store.dispatch(stockArticles(data));
          }
        })
        //! ERROR
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data.error);
          }
          else {
            console.log('Error', error.message);
          }
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
