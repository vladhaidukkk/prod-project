import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';
import { authActions, type Viewer } from 'entities/auth';
import { LOCAL_STORAGE_VIEWER_KEY } from 'shared/consts/local-storage';

type LoginByUsernameArg = {
  username: string;
  password: string;
};

export const loginByUsername = createAsyncThunk<Viewer, LoginByUsernameArg, ThunkConfig<string>>(
  'login/loginByUsername',
  async (arg, { dispatch, rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.post<Viewer>('login', arg);

      // Here we can use side effects because every async action is like a middleware
      localStorage.setItem(LOCAL_STORAGE_VIEWER_KEY, JSON.stringify(data));
      dispatch(authActions.authenticated(data));

      return data;
    } catch (err) {
      console.error(err);
      // If we want to have different error messages we need to create a mapper
      return rejectWithValue('error');
    }
  }
);
