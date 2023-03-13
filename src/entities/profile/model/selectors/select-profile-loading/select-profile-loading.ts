import { type StateSchema } from 'app/providers/store-provider';

export const selectProfileLoading = (state: StateSchema) => {
  return state.profile?.loading ?? false;
};
