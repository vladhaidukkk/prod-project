import { createSlice } from '@reduxjs/toolkit';
import { type ArticleDetailsSchema } from '../../types';
import { fetchArticleById } from '../actions/fetch-article-by-id/fetch-article-by-id';

const initialState: ArticleDetailsSchema = {
  loading: false,
};

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { reducer: articleDetailsReducer, actions: articleDetailsActions } =
  articleDetailsSlice;
