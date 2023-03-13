import { type StateSchema } from 'app/providers/store-provider';

export const selectProfileReadonly = (state: StateSchema) => {
  return state.profile?.readonly ?? true;
};
