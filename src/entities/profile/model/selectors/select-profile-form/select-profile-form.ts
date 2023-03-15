import { type StateSchema } from 'app/providers/store-provider';

export const selectProfileForm = (state: StateSchema) => {
  return state.profile?.form;
};
