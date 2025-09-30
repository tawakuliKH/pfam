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
    lng: 'en', // Force English as default language
    fallbackLng: 'en',
    debug: false,
    
    // Language detection configuration
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
      
      // Override language detection to always start with English
      checkWhitelist: true
    },
    
    // Only allow these languages
    whitelist: ['en', 'de', 'fa'],
    
    interpolation: {
      escapeValue: false,
    }
  });

// Function to handle RTL and language change
export const changeLanguage = (lng) => {
  const isRTL = rtlLanguages.includes(lng);
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
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
  
  return i18n.changeLanguage(lng);
};

// Initialize with English on first load
export const initializeLanguage = () => {
  const savedLanguage = localStorage.getItem('i18nextLng');
  
  // If no language is saved, force English
  if (!savedLanguage || !['en', 'de', 'fa'].includes(savedLanguage)) {
    localStorage.setItem('i18nextLng', 'en');
    changeLanguage('en');
  } else {
    changeLanguage(savedLanguage);
  }
};

// Call initialization when the module loads
initializeLanguage();

export default i18n;