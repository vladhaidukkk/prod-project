import { type DeepPartial } from '@reduxjs/toolkit';
import { type LoginSchema } from 'features/auth-by-username/types';
import { loginActions, loginReducer } from './login-slice';

describe('(Reducer): loginSlice', () => {
  test('should set username', () => {
    const loginState: DeepPartial<LoginSchema> = {
      username: 'username',
    };
    expect(
      loginReducer(loginState as LoginSchema, loginActions.usernameSet('new-username'))
    ).toEqual({ username: 'new-username' });
  });

  test('should set password', () => {
    const loginState: DeepPartial<LoginSchema> = {
      password: 'password',
    };
    expect(
      loginReducer(loginState as LoginSchema, loginActions.passwordSet('new-password'))
    ).toEqual({ password: 'new-password' });
  });
});
