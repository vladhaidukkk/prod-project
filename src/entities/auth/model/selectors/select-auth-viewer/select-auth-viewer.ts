import { type StateSchema } from 'app/providers/store-provider';

export const selectAuthViewer = (state: StateSchema) => {
  return state.auth.viewer;
};
