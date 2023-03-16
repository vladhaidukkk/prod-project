import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_VIEWER_KEY } from 'shared/consts/local-storage';
import { type Viewer, type AuthSchema } from '../../types';

const initialState: AuthSchema = {
  initialized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticated: (state, action: PayloadAction<Viewer>) => {
      state.viewer = action.payload;
    },
    initialized: (state, action: PayloadAction<Viewer | undefined>) => {
      if (action.payload) {
        state.viewer = action.payload;
      }
      state.initialized = true;
    },
    loggedOut: (state) => {
      state.viewer = undefined;
      // It's a very bad practice: https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
      localStorage.removeItem(LOCAL_STORAGE_VIEWER_KEY);
    },
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;
