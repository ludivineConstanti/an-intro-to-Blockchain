import i18n from 'i18next';
// not sure if needed, if not, will have to remove the
// package later (already installed it with yarn)
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from 'src/assets/languageJson/en/index.json';
import fr from 'src/assets/languageJson/fr/index.json';

// tutorial https://www.youtube.com/watch?v=txHU6lrsa3o

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

// if use backend will have to add it there
i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  lng: 'en',
  debug: true,
  // order in which we look for the language in the user's browser
  // first the query then the cookie
  detection: {
    order: ['queryString', 'cookie'],
    // put the language in the cookie
    cache: ['cookie'],
  },
  // React already does it for us
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
