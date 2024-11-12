import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './locales';

const locale = localStorage.getItem('locale') || 'en';

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: locale, // Default language
  fallbackLng: 'en', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already protects against XSS
  },
});

export default i18n;
