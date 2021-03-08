export const CHANGE_VALUE_LOGIN = 'CHANGE_VALUE_LOGIN';
export const CHANGE_VALUE_REGISTER = 'CHANGE_VALUE_REGISTER';
export const CHANGE_VALUE_SETTINGS = 'CHANGE_VALUE_SETTINGS';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SAVE_USER_LOGIN = 'SAVE_USER';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const SAVE_USER_REGISTER = 'SAVE_REGISTER';

export const LOGOUT = 'LOGOUT';

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

export const changeValueSettings = (value, name) => ({
  type: CHANGE_VALUE_SETTINGS,
  value,
  name,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const saveUserLogin = (firstname, lastname) => ({
  type: SAVE_USER_LOGIN,
  firstname,
  lastname,
});

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const saveUserRegister = (firstname, lastname) => ({
  type: SAVE_USER_REGISTER,
  firstname,
  lastname,
});

export const logout = () => ({
  type: LOGOUT,
});
