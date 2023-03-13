import { type StateSchema } from 'app/providers/store-provider';

export const selectProfileError = (state: StateSchema) => {
  return state.profile?.error;
};
