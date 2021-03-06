export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE';

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SAVE_USER = 'SAVE_USER';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const SAVE_REGISTER = 'SAVE_REGISTER';

export const LOGOUT = 'LOGOUT';

export const GET_ALL_QUIZZES = 'GET_ALL_QUIZZES';
export const GET_ONE_QUIZ = 'GET_ONE_QUIZ';
export const STOCK_QUIZZES = 'STOCK_QUIZZES';
export const STOCK_QUIZ = 'STOCK_QUIZ';

export const FORM_SUBMIT = 'FORM_SUBMIT';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const changeLoadingState = (value) => ({
  type: CHANGE_LOADING_STATE,
  value,
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

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const saveRegister = (user) => ({
  type: SAVE_REGISTER,
  user,
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

export const stockQuiz = (quiz) => ({
  type: STOCK_QUIZ,
  quiz,
});

export const formSubmit = () => ({
  type: FORM_SUBMIT,
});
