import { Container } from '../../components/Container';
import { Typography } from 'BlogView/pearls/Typography';

import { useTranslation } from 'react-i18next';
import { DataManager } from 'BlogView/DataManager';
import { ArticleSummaries } from 'BlogView/components/ArticleSummaries';
import { Section } from '../Home/styles';

export function RecentlyOpenedArticles() {
  const { t } = useTranslation();
  const dataManager = new DataManager();
  const latestArticles = dataManager.getRecentlyOpenedArticleSummaries();
  return (
    <Container>
      <Section>
        <Typography variant="h1">{t('Recent Articles')}</Typography>
        <ArticleSummaries articleSummaries={latestArticles} />
      </Section>
    </Container>
  );
}
