export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE';

export const CHANGE_VALUE_LOGIN = 'CHANGE_VALUE_LOGIN';
export const CHANGE_VALUE_REGISTER = 'CHANGE_VALUE_REGISTER';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SAVE_USER = 'SAVE_USER';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const SAVE_REGISTER = 'SAVE_REGISTER';

export const LOGOUT = 'LOGOUT';

export const GET_ALL_QUIZZES = 'GET_ALL_QUIZZES';
export const GET_ONE_QUIZ = 'GET_ONE_QUIZ';
export const STOCK_QUIZZES = 'STOCK_QUIZZES';
export const STOCK_QUIZ = 'STOCK_QUIZ';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const changeLoadingState = (value) => ({
  type: CHANGE_LOADING_STATE,
  value,
});

export const changeValueLogin = (value, name) => ({
  type: CHANGE_VALUE_LOGIN,
  value,
  name,
});

export const changeValueRegister = (value, name) => ({
  type: CHANGE_VALUE_REGISTER,
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

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const saveRegister = (firstname, lastname) => ({
  type: SAVE_REGISTER,
  firstname,
  lastname,
});

export const logout = () => ({
  type: LOGOUT,
});

export const getAllQuizzes = () => ({
  type: GET_ALL_QUIZZES,
});

export const getOneQuiz = (id) => ({
  type: GET_ONE_QUIZ,
  id,
});

export const stockQuizzes = (quizzes) => ({
  type: STOCK_QUIZZES,
  quizzes,
});

export const stockQuiz = (currentQuizData) => ({
  type: STOCK_QUIZ,
  currentQuizData,
});
