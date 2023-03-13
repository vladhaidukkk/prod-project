import { createSlice } from '@reduxjs/toolkit';
import { type ProfileSchema } from 'entities/profile/types';
import { fetchProfileData } from '../actions/fetch-profile-data/fetch-profile-data';

const initialState: ProfileSchema = {
  loading: false,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { reducer: profileReducer, actions: profileActions } = profileSlice;
