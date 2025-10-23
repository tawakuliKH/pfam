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

// Custom query string detector
const queryStringDetector = {
  name: 'queryString',
  lookup(options) {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    return langParam && ['en', 'de', 'fa'].includes(langParam) ? langParam : undefined;
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default fallback
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    // Language detection configuration - QUERY STRING FIRST
    detection: {
      order: ['queryString', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      
      // Query string detector
      lookupQuerystring: 'lang',
      
      // Check only whitelisted languages
      checkWhitelist: true
    },
    
    // Only allow these languages
    supportedLngs: ['en', 'de', 'fa'],
    
    interpolation: {
      escapeValue: false,
    }
  });

// Function to handle RTL and language change
export const changeLanguage = async (lng) => {
  try {
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
    
    // Update URL parameter without page reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lng);
    window.history.replaceState(null, '', url.toString());
    
    // Change the language
    await i18n.changeLanguage(lng);
    
    return true;
  } catch (error) {
    console.error('Error changing language:', error);
    return false;
  }
};

// Initialize language based on URL parameter
export const initializeLanguage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  
  // If URL has a valid language parameter, use it
  if (langParam && ['en', 'de', 'fa'].includes(langParam)) {
    changeLanguage(langParam);
  } else {
    // Otherwise use the detected language or default to English
    const detectedLang = i18n.language;
    if (detectedLang && detectedLang !== 'en') {
      changeLanguage(detectedLang);
    }
  }
};

// Call initialization when the module loads
initializeLanguage();

export default i18n;