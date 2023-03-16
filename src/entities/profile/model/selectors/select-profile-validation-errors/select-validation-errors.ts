import { type StateSchema } from 'app/providers/store-provider';

export const selectProfileValidationErrors = (state: StateSchema) => {
  return state.profile?.validationErrors;
};
