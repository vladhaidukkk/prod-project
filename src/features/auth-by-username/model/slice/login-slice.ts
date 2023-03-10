import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type LoginSchema } from '../../types';
import { loginByUsername } from '../actions/login-by-username/login-by-username';

const initialState: LoginSchema = {
  username: '',
  password: '',
  loading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    usernameSet: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    passwordSet: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { reducer: loginReducer, actions: loginActions } = loginSlice;
