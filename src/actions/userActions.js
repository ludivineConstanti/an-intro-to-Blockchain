export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CHANGE_VALUE = 'CHANGE_VALUE';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});
