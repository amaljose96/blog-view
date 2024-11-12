import { TranslatedString } from 'BlogView/DataManager/types';
import { useTranslation } from 'react-i18next';

export function useTranslatedString() {
  const { i18n } = useTranslation();
  function translate(string: TranslatedString | undefined) {
    if (!string) return '';
    return string[i18n.language] || string['en'];
  }
  return { translate };
}
