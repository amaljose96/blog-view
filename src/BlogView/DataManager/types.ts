type TranslatedString = Record<string, string>;

interface TextElement {
  type: string;
  content: TranslatedString;
}

interface ArticleElement {
  type: string;
  content: TextElement[];
}

export interface Article {
  id: string;
  title: TranslatedString;
  createdAt: number;
  lastUpdatedAt: number;
  imageUrl: string;
  summary: TranslatedString;
  tags: string[];
  content: ArticleElement[];
}
export interface ArticleSummary {
  title: TranslatedString;
  imageUrl: string;
  summary: TranslatedString;
  tags: string[];
}
