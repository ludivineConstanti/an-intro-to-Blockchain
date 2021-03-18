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
            store.dispatch(stockArticles(articlesFormatter(response.data)));
          }
        })
        // ? Message d'erreur à mettre ici
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
