import { type EntityState } from '@reduxjs/toolkit';
import { type Comment } from 'entities/comment';

export type ArticleDetailsCommentsSchema = EntityState<Comment> & {
  loading: boolean;
  error?: string;
};
