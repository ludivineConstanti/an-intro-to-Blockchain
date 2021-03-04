export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SAVE_USER = 'SAVE_USER';
export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE';

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

export const changeLoadingState = () => ({
  type: CHANGE_LOADING_STATE,
});
