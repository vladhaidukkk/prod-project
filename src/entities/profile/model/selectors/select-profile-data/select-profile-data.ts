import { type StateSchema } from 'app/providers/store-provider';

export const selectProfileData = (state: StateSchema) => {
  return state.profile?.data;
};
