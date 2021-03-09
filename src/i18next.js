import i18next from 'i18next';
// not sure if needed, if not, will have to remove the
// package later (already installed it with yarn)
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from 'src/assets/languageJson/en/index.json';
import fr from 'src/assets/languageJson/fr/index.json';
import store from 'src/store';

// tutorial https://www.youtube.com/watch?v=txHU6lrsa3o
// https://www.youtube.com/watch?v=Od6VRVJH15Y&t=787s

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

const state = store.getState();

// if use backend will have to add it there
i18next.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: state.global.language,
  debug: true,
  // order in which we look for the language in the user's browser
  // first the query then the cookie
  detection: {
    order: ['queryString', 'cookie'],
    // put the language in the cookie
    cache: ['cookie'],
  },
  // React already have escape value on true per default
  interpolation: {
    // escape the values means you will not be able to use code, just strings
    escapeValue: true,
  },
});

export default i18next;
