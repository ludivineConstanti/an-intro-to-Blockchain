export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SAVE_USER = 'SAVE_USER';
export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE';
export const GET_ALL_QUIZZES = 'GET_ALL_QUIZZES';
export const STOCK_QUIZZES = 'STOCK_QUIZZES';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const saveUser = (firstname, lastname) => ({
  type: SAVE_USER,
  firstname,
  lastname,
});

export const changeLoadingState = (value) => ({
  type: CHANGE_LOADING_STATE,
  value,
});

export const getAllQuizzes = () => ({
  type: GET_ALL_QUIZZES,
});

export const stockQuizzes = (quizzes) => ({
  type: STOCK_QUIZZES,
  quizzes,
});
