export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const changeLoadingState = (value) => ({
  type: CHANGE_LOADING_STATE,
  value,
});
