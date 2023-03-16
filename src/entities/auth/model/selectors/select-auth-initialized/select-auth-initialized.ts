import { type StateSchema } from 'app/providers/store-provider';

export const selectAuthInitialized = (state: StateSchema) => {
  return state.auth.initialized;
};
