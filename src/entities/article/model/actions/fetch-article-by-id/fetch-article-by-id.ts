import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';
import { type Article } from '../../../types';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (id, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get<Article>(`articles/${id}`);
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue('error');
    }
  }
);
