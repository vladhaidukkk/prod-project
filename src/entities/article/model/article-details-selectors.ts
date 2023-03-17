import { type StateSchema } from 'app/providers/store-provider';

export const selectArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;

export const selectArticleDetailsLoading = (state: StateSchema) =>
  state.articleDetails?.loading ?? false;

export const selectArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
