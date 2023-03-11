import { type StateSchema } from 'app/providers/store-provider';

export const selectLoginState = (state: StateSchema) => {
  return (
    state.login ?? {
      username: '',
      password: '',
      loading: false,
    }
  );
};
