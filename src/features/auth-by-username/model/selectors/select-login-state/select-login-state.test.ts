import { type StateSchema } from 'app/providers/store-provider';
import { type LoginSchema } from 'features/auth-by-username/types';
import { selectLoginState } from './select-login-state';

describe('(Selector): selectLoginState', () => {
  test('should return login state', () => {
    const loginState: LoginSchema = {
      username: 'username',
      password: 'password',
      loading: true,
      error: 'error',
    };
    const state: DeepPartial<StateSchema> = {
      login: loginState,
    };
    expect(selectLoginState(state as StateSchema)).toEqual(loginState);
  });

  test('should work with empty state', () => {
    expect(selectLoginState({} as StateSchema)).toEqual({
      username: '',
      password: '',
      loading: false,
      error: undefined,
    });
  });
});
