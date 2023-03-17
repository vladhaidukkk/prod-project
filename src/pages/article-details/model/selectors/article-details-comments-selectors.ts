import { type StateSchema } from 'app/providers/store-provider';

export const selectArticleCommentsLoading = (state: StateSchema) => {
  return state.articleDetailsComments?.loading ?? false;
};

export const selectArticleCommentsError = (state: StateSchema) => {
  return state.articleDetailsComments?.error;
};
