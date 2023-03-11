import axios from 'axios';
import { loginByUsername } from './login-by-username';
import { authActions, type Viewer } from 'entities/auth';
import { TestAsyncThunk } from 'shared/utils/tests';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('(Async action): loginByUsername', () => {
  test('should be fulfilled', async () => {
    const viewerData: Viewer = { id: '1', username: 'username' };

    mockedAxios.post.mockResolvedValueOnce({ data: viewerData });
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.exec({ username: 'username', password: 'password' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(viewerData);
    expect(thunk.dispatch).toHaveBeenCalledWith(authActions.authenticated(viewerData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test('should be rejected', async () => {
    mockedAxios.post.mockRejectedValueOnce({ status: 403 });
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.exec({ username: 'username', password: 'password' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
