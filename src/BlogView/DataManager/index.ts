import data from '../../data.json';
import { Article, ArticleSummary } from './types';

const PAGE_SIZE = 10;
const RECENT_ARTICLES_LIMIT = 10;

export class DataManager {
  articles: Article[] = [];
  lastUpdatedAt = 0;
  constructor() {
    this.articles = data.articles;
    this.lastUpdatedAt = data.lastUpdatedAt;
  }
  private static getArticleSummary(article: Article): ArticleSummary {
    return {
      id: article.id,
      title: article.title,
      imageUrl: article.imageUrl,
      summary: article.summary,
      tags: article.tags || [],
    };
  }
  private static getPaginatedArticleSummaries(articles: Article[]) {
    const paginatedArticles: Record<number, ArticleSummary[]> = { 0: [] };
    const totalPages = Math.ceil(articles.length / PAGE_SIZE);
    for (let pageNumber = 0; pageNumber < totalPages; pageNumber++) {
      const pageArticles = articles.slice(
        pageNumber * PAGE_SIZE,
        (pageNumber + 1) * PAGE_SIZE,
      );
      paginatedArticles[pageNumber] = pageArticles.map(
        DataManager.getArticleSummary,
      );
    }

    return paginatedArticles;
  }

  // Latest Articles

  getLatestArticleSummaries() {
    const sortedArticles = this.articles.sort(
      (a, b) => a.createdAt - b.createdAt,
    );
    return DataManager.getPaginatedArticleSummaries(sortedArticles);
  }

  // Saved Articles

  private static getSavedArticleIds() {
    return localStorage.getItem('savedArticles')?.split('|') || [];
  }

  private static setSavedArticleIds(articleIds: string[]) {
    const savedArticleIdString = articleIds.join('|');
    localStorage.setItem('savedArticles', savedArticleIdString);
  }

  private getSavedArticles() {
    const savedArticleIds: string[] = DataManager.getSavedArticleIds();
    return this.articles.filter((article) =>
      savedArticleIds.includes(article.id),
    );
  }

  getSavedArticleSummaries() {
    const savedArticles = this.getSavedArticles();
    return DataManager.getPaginatedArticleSummaries(savedArticles);
  }

  static addSavedArticle(id: string) {
    const savedArticleIds: string[] = DataManager.getSavedArticleIds();
    savedArticleIds.push(id);
    DataManager.setSavedArticleIds(savedArticleIds);
  }
  static removeSavedArticle(id: string) {
    const savedArticleIds: string[] = DataManager.getSavedArticleIds();
    const newSavedArticleIds = savedArticleIds.filter(
      (articleId) => articleId !== id,
    );
    DataManager.setSavedArticleIds(newSavedArticleIds);
  }
  static isSavedArticle(id: string) {
    const savedArticleIds: string[] = DataManager.getSavedArticleIds();
    return savedArticleIds.find((articleId) => articleId === id);
  }

  // Recently opened articles

  private static getRecentlyOpenedArticleIds() {
    const recentlyOpenedArticleIds =
      localStorage.getItem('recentlyOpenedArticles')?.split('|') || [];
    console.log(recentlyOpenedArticleIds);
    return recentlyOpenedArticleIds;
  }

  private getRecentlyOpenedArticles() {
    const recentlyOpenedArticleIds: string[] =
      DataManager.getRecentlyOpenedArticleIds();
    return this.articles.filter((article) =>
      recentlyOpenedArticleIds.includes(article.id),
    );
  }

  getRecentlyOpenedArticleSummaries() {
    const recentlyOpenedArticles = this.getRecentlyOpenedArticles();
    console.log('Recent', recentlyOpenedArticles);
    return recentlyOpenedArticles.map(DataManager.getArticleSummary);
  }

  // Opening an article

  openArticle(articleId: string) {
    const currentRecentlyOpenedArticleIds =
      DataManager.getRecentlyOpenedArticleIds();
    const newRecentlyOpenedArticleIds = [
      articleId,
      ...currentRecentlyOpenedArticleIds,
    ].slice(0, RECENT_ARTICLES_LIMIT);
    localStorage.setItem(
      'recentlyOpenedArticles',
      newRecentlyOpenedArticleIds.join('|'),
    );

    const article = this.articles.find((article) => article.id === articleId);
    return article;
  }
}
