import { useTranslation } from 'react-i18next';
import { HeaderContainer } from './styles';

export function Header() {
  const { t } = useTranslation();
  return <HeaderContainer>{t("Amal's Blog")} </HeaderContainer>;
}
