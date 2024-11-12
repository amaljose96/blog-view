import { Container } from '../../components/Container';
import { Typography } from 'BlogView/pearls/Typography';
import { Section } from './styles';
import { useTranslation } from 'react-i18next';

export function Home() {
  const { t } = useTranslation();
  return (
    <Container>
      <Section>
        <Typography variant="h1">{t("Welcome to Amal's blog")}</Typography>
        <Typography variant="body">
          {t(
            'Here, you’ll find a collection of articles where I share my thoughts, ideas, and experiences. It’s a blend of tech insights, lifereflections, and everything in between. Take a look around—I hope you find something that resonates with you!',
          )}
        </Typography>
      </Section>
      <Section>
        <Typography variant="h1">{t('Recent Articles')}</Typography>
      </Section>
    </Container>
  );
}
