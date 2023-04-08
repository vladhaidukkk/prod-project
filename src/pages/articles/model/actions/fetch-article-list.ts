import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';
import { type Article } from 'entities/article';

export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPage/fetchArticleList',
  async (_, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
        },
      });
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue('error');
    }
  }
);
