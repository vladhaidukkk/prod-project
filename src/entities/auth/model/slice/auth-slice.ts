import { createSlice } from '@reduxjs/toolkit';
import { type AuthSchema } from '../../types';

const initialState: AuthSchema = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const { reducer: authReducer, actions: authActions } = authSlice;
