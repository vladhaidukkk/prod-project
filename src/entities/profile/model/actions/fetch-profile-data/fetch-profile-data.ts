import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';
import { type Profile } from '../../../types';

export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_arg, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get<Profile>('profile');
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue('error');
    }
  }
);
