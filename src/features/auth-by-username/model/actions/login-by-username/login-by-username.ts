import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authActions, type Viewer } from 'entities/auth';
import { LOCAL_STORAGE_VIEWER_KEY } from 'shared/consts/local-storage';

type LoginByUsernameArgs = {
  username: string;
  password: string;
};

type LoginByUsernameThunkAPI = {
  rejectValue: string;
};

export const loginByUsername = createAsyncThunk<
  Viewer,
  LoginByUsernameArgs,
  LoginByUsernameThunkAPI
>('login/loginByUsername', async (args, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.post<Viewer>('http://localhost:8000/login', args);

    // It's a very bad practice to have side effects inside actions: https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
    localStorage.setItem(LOCAL_STORAGE_VIEWER_KEY, JSON.stringify(data));
    dispatch(authActions.authenticated(data));

    return data;
  } catch (err) {
    console.error(err);
    // If we want to have different error messages we need to create a mapper
    return rejectWithValue('error');
  }
});
