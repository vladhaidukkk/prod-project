import { loginByUsername } from './login-by-username';
import { authActions, type Viewer } from 'entities/auth';
import { TestAsyncThunk } from 'shared/utils/tests';

describe('(Async action): loginByUsername', () => {
  test('should be fulfilled', async () => {
    const viewerData: Viewer = { id: '1', username: 'username' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockResolvedValueOnce({ data: viewerData });
    const result = await thunk.exec({ username: 'username', password: 'password' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(viewerData);
    expect(thunk.dispatch).toHaveBeenCalledWith(authActions.authenticated(viewerData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test('should be rejected', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockRejectedValueOnce({ status: 403 });
    const result = await thunk.exec({ username: 'username', password: 'password' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
