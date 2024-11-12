import { ArticleSummary } from 'BlogView/DataManager/types';
import { Label } from 'BlogView/pearls/Label';
import { Typography } from 'BlogView/pearls/Typography';
import { useTranslation } from 'react-i18next';
import {
  ArticleSummaryCardContainer,
  ArticleTags,
  CardContent,
  SummaryImage,
} from './styles';
import { useNavigate } from 'react-router';

interface IArticleSummaryCardProps {
  articleSummary: ArticleSummary;
}

export function ArticleSummaryCard({
  articleSummary,
}: IArticleSummaryCardProps) {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const navigate = useNavigate();
  return (
    <ArticleSummaryCardContainer
      onClick={() => {
        navigate('/article/' + articleSummary.id);
      }}
    >
      <SummaryImage src={articleSummary.imageUrl} />
      <CardContent>
        <Typography variant="h2">{articleSummary.title[locale]}</Typography>

        <Typography variant="body">{articleSummary.summary[locale]}</Typography>

        <ArticleTags>
          {articleSummary.tags.map((tag) => (
            <Label text={tag} />
          ))}
        </ArticleTags>
      </CardContent>
    </ArticleSummaryCardContainer>
  );
}
