import { type StateSchema } from 'app/providers/store-provider';

export const selectArticlesPageLoading = (state: StateSchema) => {
  return state.articlesPage?.loading ?? false;
};

export const selectArticlesPageError = (state: StateSchema) => {
  return state.articlesPage?.error;
};

export const selectArticlesPageView = (state: StateSchema) => {
  return state.articlesPage?.view ?? 'tile';
};
