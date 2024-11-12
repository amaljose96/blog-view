import { ArticleSummary } from 'BlogView/DataManager/types';
import { Label } from 'BlogView/pearls/Label';
import { Typography } from 'BlogView/pearls/Typography';
import {
  ArticleSummaryCardContainer,
  ArticleTags,
  CardContent,
  SummaryImage,
} from './styles';
import { useNavigate } from 'react-router';
import { useTranslatedString } from 'BlogView/hooks/useTranslatedString';

interface IArticleSummaryCardProps {
  articleSummary: ArticleSummary;
}

export function ArticleSummaryCard({
  articleSummary,
}: IArticleSummaryCardProps) {
  const { translate } = useTranslatedString();
  const navigate = useNavigate();
  return (
    <ArticleSummaryCardContainer
      onClick={() => {
        navigate('/article/' + articleSummary.id);
      }}
    >
      <SummaryImage src={articleSummary.imageUrl} />
      <CardContent>
        <Typography variant="h2">{translate(articleSummary.title)}</Typography>

        <Typography variant="body">
          {translate(articleSummary.summary)}
        </Typography>

        <ArticleTags>
          {articleSummary.tags.map((tag) => (
            <Label text={tag} />
          ))}
        </ArticleTags>
      </CardContent>
    </ArticleSummaryCardContainer>
  );
}
