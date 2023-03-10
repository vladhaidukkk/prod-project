import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_VIEWER_KEY } from 'shared/consts/local-storage';
import { type Viewer, type AuthSchema } from '../../types';

const initialState: AuthSchema = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticated: (state, action: PayloadAction<Viewer>) => {
      state.viewer = action.payload;
    },
    loggedOut: (state) => {
      state.viewer = undefined;
      // It's a very bad practice
      localStorage.removeItem(LOCAL_STORAGE_VIEWER_KEY);
    },
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;
