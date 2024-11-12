import { Container } from '../../components/Container';
import { Typography } from 'BlogView/pearls/Typography';

import { useTranslation } from 'react-i18next';
import { DataManager } from 'BlogView/DataManager';
import { ArticleSummaries } from 'BlogView/components/ArticleSummaries';
import { useState } from 'react';
import { Section } from '../Home/styles';

export function SavedArticles() {
  const { t } = useTranslation();
  const dataManager = new DataManager();
  const [pageNumber, setPageNumber] = useState(0);
  const latestArticles = dataManager.getSavedArticleSummaries();
  console.log(latestArticles);
  return (
    <Container>
      <Section>
        <Typography variant="h1">{t('Saved Articles')}</Typography>
        <ArticleSummaries
          articleSummaries={latestArticles[pageNumber]}
          pagination={{
            setPageNumber,
            pageNumber,
            numberOfPages: Object.keys(latestArticles).length,
          }}
        />
        {latestArticles[0].length === 0 && (
          <Typography variant="body">{t('No saved articles')}</Typography>
        )}
      </Section>
    </Container>
  );
}
