import { type EntityState } from '@reduxjs/toolkit';
import { type Article, type ArticleView } from 'entities/article';

export type ArticlesPageSchema = EntityState<Article> & {
  loading: boolean;
  error?: string;
  view: ArticleView;
};
