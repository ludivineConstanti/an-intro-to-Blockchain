export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SEND_LOGIN = 'SEND_LOGIN';
export const LOGIN = 'LOGIN';
export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const sendLogin = () => ({
  type: SEND_LOGIN,
});

export const login = () => ({
  type: LOGIN,
});

export const changeLoadingState = () => ({
  type: CHANGE_LOADING_STATE,
});
