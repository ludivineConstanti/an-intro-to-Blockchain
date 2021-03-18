import { TOGGLE_MENU, CHANGE_VALUE_GLOBAL } from 'src/actions/appActions';

const supportedLanguage = ['en', 'fr'];
const language = navigator.userLanguage
  ? navigator.userLanguage.slice(0, 2)
  : navigator.language.slice(0, 2);

const initialState = {
  language: supportedLanguage.indexOf(language) === -1 ? 'en' : language,
  menuOpen: false,
  loading: false,
  backgroundClassName: 'app__threeJs app__threeJS--animationIntro',
  showPopUp: false,
  showAbout: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    }
    case CHANGE_VALUE_GLOBAL: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    default:
      return state;
  }
};
