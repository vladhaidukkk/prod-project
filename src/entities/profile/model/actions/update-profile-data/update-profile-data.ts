import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';
import { type Profile } from '../../../types';
import { selectProfileForm } from '../../selectors/select-profile-form/select-profile-form';

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_arg, { rejectWithValue, extra, getState }) => {
    const formData = selectProfileForm(getState());

    try {
      const { data } = await extra.api.put<Profile>('profile', formData);
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue('error');
    }
  }
);
