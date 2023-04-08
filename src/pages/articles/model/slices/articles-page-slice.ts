import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/store-provider';
import { type ArticlesPageSchema } from '../../types';
import { fetchArticleList } from '../actions/fetch-article-list';
import { type ArticleView, type Article } from 'entities/article';
import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from 'shared/consts/local-storage';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const selectArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage ?? articlesAdapter.getInitialState()
);

const initialState: ArticlesPageSchema = {
  ids: [],
  entities: {},
  loading: false,
  view: 'tile',
};

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>(initialState),
  reducers: {
    viewSet: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY, action.payload);
    },
    initialized: (state) => {
      state.view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) as ArticleView;
    },
  },
  extraReducers: (build) =>
    build
      .addCase(fetchArticleList.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(fetchArticleList.fulfilled, (state, action) => {
        state.loading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
