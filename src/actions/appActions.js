export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CHANGE_VALUE_GLOBAL = 'CHANGE_VALUE_GLOBAL';

export const changeValueGlobal = (value, name) => ({
  type: CHANGE_VALUE_GLOBAL,
  value,
  name,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});
