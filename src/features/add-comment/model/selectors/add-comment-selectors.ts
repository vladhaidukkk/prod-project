import { type StateSchema } from 'app/providers/store-provider';

export const selectAddCommentText = (state: StateSchema) => {
  return state.addComment?.text ?? '';
};

export const selectAddCommentError = (state: StateSchema) => {
  return state.addComment?.error;
};
