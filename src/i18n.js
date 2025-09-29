import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/de/translation.json';
import faTranslation from './locales/fa/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  de: {
    translation: deTranslation
  },
  fa: {
    translation: faTranslation
  }
};

// RTL languages configuration
const rtlLanguages = ['fa', 'ar', 'he'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    }
  });

// Function to handle RTL
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  
  // Set direction and font family
  const isRTL = rtlLanguages.includes(lng);
  document.documentElement.lang = lng;
  
  // Add language-specific font class
  document.documentElement.classList.remove('font-english', 'font-persian', 'font-german');
  if (lng === 'fa') {
    document.documentElement.classList.add('font-persian');
  } else if (lng === 'de') {
    document.documentElement.classList.add('font-german');
  } else {
    document.documentElement.classList.add('font-english');
  }
};

export default i18n;