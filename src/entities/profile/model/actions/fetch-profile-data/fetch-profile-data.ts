import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';
import { ProfileError } from 'entities/profile/consts';
import { type Profile } from '../../../types';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<ProfileError>>(
  'profile/fetchProfileData',
  async (profileId, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get<Profile>(`profiles/${profileId}`);
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(ProfileError.ServerError);
    }
  }
);
