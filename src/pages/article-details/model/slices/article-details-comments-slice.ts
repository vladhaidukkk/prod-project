import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/store-provider';
import { type Comment } from 'entities/comment';
import { type ArticleDetailsCommentsSchema } from 'pages/article-details/types';
import { fetchCommentsByArticleId } from '../actions/fetch-comments-by-article-id/fetch-comments-by-article-id';

const articleCommentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const selectArticleComments = articleCommentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments ?? articleCommentsAdapter.getInitialState()
);

const initialState: ArticleDetailsCommentsSchema = {
  ids: [],
  entities: {},
  loading: false,
};

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: articleCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(initialState),
  reducers: {},
  extraReducers: (build) =>
    build
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
        state.loading = false;
        articleCommentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
