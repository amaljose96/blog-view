import { Container } from 'BlogView/components/Container';
import { Typography } from 'BlogView/pearls/Typography';
import { useNavigate, useParams } from 'react-router';
import { Section } from '../Home/styles';
import { DataManager } from 'BlogView/DataManager';

import { useTranslatedString } from 'BlogView/hooks/useTranslatedString';

export function ArticleView() {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { translate } = useTranslatedString();

  const dataManager = new DataManager();
  const article = dataManager.openArticle(params.id || '');
  if (!article) {
    navigate('/');
  }
  return (
    <Container>
      <Section>
        <Typography variant="h1">{translate(article?.title)}</Typography>
      </Section>
    </Container>
  );
}
