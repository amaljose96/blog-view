import { useTranslation } from 'react-i18next';

export function useCurrentLocale() {
  const { i18n } = useTranslation();
  function getCurrentLocale() {
    return localStorage.getItem('locale') || 'en';
  }
  function setCurrentLocale(newLocale: string) {
    localStorage.setItem('locale', newLocale);
    i18n.changeLanguage(newLocale);
  }
  return {
    getCurrentLocale,
    setCurrentLocale,
  };
}
