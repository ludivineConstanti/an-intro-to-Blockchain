export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const STOCK_ARTICLES = 'STOCK_ARTICLES';

export const getAllArticles = () => ({
  type: GET_ALL_ARTICLES,
});

export const stockArticles = (payload) => ({
  type: STOCK_ARTICLES,
  payload,
});
