import { Container } from '../../components/Container';
import { Typography } from 'BlogView/pearls/Typography';

import { useTranslation } from 'react-i18next';

import { Section } from '../Home/styles';
import { Select } from 'BlogView/pearls/Select';
import { languages } from 'locales';
import { useCurrentLocale } from './hooks/useCurrentLocale';
import { ThemePreview } from './ThemePreview';
import { themes } from 'BlogView/pearls/theme/themes';
import { ThemeSet } from './styles';

export function Settings() {
  const { t } = useTranslation();
  const { getCurrentLocale, setCurrentLocale } = useCurrentLocale();

  return (
    <Container>
      <Section>
        <Typography variant="h1">{t('Settings')}</Typography>
        <Select
          label={t('Current Language')}
          options={languages}
          value={getCurrentLocale()}
          onChange={setCurrentLocale}
        />
        <Typography variant="h2">{t('Theme')}</Typography>
        <ThemeSet>
          {themes.map((themeItem) => (
            <ThemePreview
              themeKey={themeItem.key}
              name={themeItem.name}
              theme={themeItem.theme}
            />
          ))}
        </ThemeSet>
      </Section>
    </Container>
  );
}
