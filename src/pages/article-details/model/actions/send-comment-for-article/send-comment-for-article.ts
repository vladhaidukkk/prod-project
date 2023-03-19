import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';
import { selectArticleDetailsData } from 'entities/article';
import { selectAuthViewer } from 'entities/auth';
import { type Comment } from 'entities/comment';
import { fetchCommentsByArticleId } from '../fetch-comments-by-article-id/fetch-comments-by-article-id';

export const sendCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetailsComments/sendCommentForArticle',
  async (text, { rejectWithValue, extra, getState, dispatch }) => {
    const viewer = selectAuthViewer(getState());
    const article = selectArticleDetailsData(getState());

    if (!viewer || !article) {
      return rejectWithValue('no data');
    }

    try {
      const { data } = await extra.api.post<Comment>('/comments', {
        text,
        userId: viewer.id,
        articleId: article.id,
      });
      void dispatch(fetchCommentsByArticleId(article.id));
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue('error');
    }
  }
);
