import { ArticleSummary } from 'BlogView/DataManager/types';
import { ArticleSummariesContainer } from './styles';
import { ArticleSummaryCard } from './ArticleSummaryCard';
import { Pagination } from './Pagination';

interface IArticleSummariesProps {
  articleSummaries: ArticleSummary[];
  pagination?: {
    pageNumber: number;
    setPageNumber: (newPageNumber: number) => void;
    numberOfPages: number;
  };
}

export function ArticleSummaries({
  articleSummaries,
  pagination,
}: IArticleSummariesProps) {
  return (
    <ArticleSummariesContainer>
      {articleSummaries.map((articleSummary) => (
        <ArticleSummaryCard articleSummary={articleSummary} />
      ))}
      {pagination && pagination.numberOfPages > 1 && (
        <Pagination
          pageNumber={pagination.pageNumber}
          setPageNumber={pagination.setPageNumber}
          numberOfPages={pagination.numberOfPages}
        />
      )}
    </ArticleSummariesContainer>
  );
}
