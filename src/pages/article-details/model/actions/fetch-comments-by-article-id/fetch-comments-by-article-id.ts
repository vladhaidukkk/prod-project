import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';
import { type Comment } from 'entities/comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetailsComments/fetchCommentsByArticleId',
  async (articleId, { rejectWithValue, extra }) => {
    if (!articleId) {
      return rejectWithValue('error');
    }

    try {
      const { data } = await extra.api.get<Comment[]>('comments', {
        params: {
          articleId,
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
