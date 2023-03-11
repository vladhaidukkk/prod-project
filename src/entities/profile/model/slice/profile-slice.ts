import { createSlice } from '@reduxjs/toolkit';
import { type ProfileSchema } from 'entities/profile/types';

const initialState: ProfileSchema = {
  loading: false,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { reducer: profileReducer, actions: profileActions } = profileSlice;
