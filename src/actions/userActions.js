export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SAVE_USER_LOGIN = 'SAVE_USER_LOGIN';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const SAVE_USER_REGISTER = 'SAVE_REGISTER';

export const CHANGE_USER_SETTINGS = 'CHANGE_USER_SETTINGS';
export const SAVE_USER_SETTINGS = 'SAVE_USER_SETTINGS';

export const CHANGE_USER_EMAIL = 'CHANGE_USER_EMAIL';
export const SAVE_USER_EMAIL = 'SAVE_USER_EMAIL';

export const DELETE_ACCOUNT_REQUEST = 'DELETE_ACCOUNT_REQUEST';

export const GET_USER_SCORES = 'GET_USER_SCORES';
export const SAVE_USER_SCORES = 'SAVE_USER_SCORES';

export const LOGOUT = 'LOGOUT';

export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const changeInputValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const saveUserLogin = (id, firstname, lastname) => ({
  type: SAVE_USER_LOGIN,
  id,
  firstname,
  lastname,
});

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const saveUserRegister = (id, firstname, lastname) => ({
  type: SAVE_USER_REGISTER,
  id,
  firstname,
  lastname,
});

export const changeUserSettings = () => ({
  type: CHANGE_USER_SETTINGS,
});

export const saveUserSettings = (newPassword) => ({
  type: SAVE_USER_SETTINGS,
  newPassword,
});

export const changeUserEmail = () => ({
  type: CHANGE_USER_EMAIL,
});

export const saveUserEmail = (newEmail) => ({
  type: SAVE_USER_EMAIL,
  newEmail,
});

export const deleteAccountRequest = () => ({
  type: DELETE_ACCOUNT_REQUEST,
});

export const logout = () => ({
  type: LOGOUT,
});

export const errorMessage = (value, name) => ({
  type: ERROR_MESSAGE,
  value,
  name,
});

export const getUserScores = () => ({
  type: GET_USER_SCORES,
});

export const saveUserScores = (scoreData) => ({
  type: SAVE_USER_SCORES,
  scoreData,
});
