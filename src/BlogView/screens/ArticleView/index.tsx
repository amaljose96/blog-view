import { Container } from 'BlogView/components/Container';
import { Typography } from 'BlogView/pearls/Typography';
import { useNavigate, useParams } from 'react-router';
import { Section } from '../Home/styles';
import { DataManager } from 'BlogView/DataManager';
import { useTranslation } from 'react-i18next';

export function ArticleView() {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const dataManager = new DataManager();
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const article = dataManager.openArticle(params.id || '');
  if (!article) {
    navigate('/');
  }
  return (
    <Container>
      <Section>
        <Typography variant="h1">{article?.title[locale]}</Typography>
      </Section>
    </Container>
  );
}
