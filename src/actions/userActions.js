export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const SAVE_USER = 'SAVE_USER';

export const CHANGE_USER_SETTINGS = 'CHANGE_USER_SETTINGS';
export const CHANGE_USER_EMAIL = 'CHANGE_USER_EMAIL';
export const SAVE_USER_SETTINGS = 'SAVE_USER_SETTINGS';

export const DELETE_ACCOUNT_REQUEST = 'DELETE_ACCOUNT_REQUEST';

export const GET_USER_SCORES = 'GET_USER_SCORES';
export const SAVE_USER_SCORES = 'SAVE_USER_SCORES';

export const LOGOUT = 'LOGOUT';

export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const changeInputValue = (value, object, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  object,
  name,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const saveUser = (id, firstname, lastname) => ({
  type: SAVE_USER,
  id,
  firstname,
  lastname,
});

export const changeUserSettings = () => ({
  type: CHANGE_USER_SETTINGS,
});

export const changeUserEmail = () => ({
  type: CHANGE_USER_EMAIL,
});

export const saveUserSettings = () => ({
  type: SAVE_USER_SETTINGS,
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
