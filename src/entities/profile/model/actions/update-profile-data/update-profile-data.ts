import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';
import { ProfileError, type ProfileValidationError } from 'entities/profile/consts';
import { validateProfileData } from 'entities/profile/utils/validate-profile-data';
import { type Profile } from '../../../types';
import { selectProfileForm } from '../../selectors/select-profile-form/select-profile-form';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ProfileError | ProfileValidationError[]>
>('profile/updateProfileData', async (_arg, { rejectWithValue, extra, getState }) => {
  const formData = selectProfileForm(getState());
  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const { data } = await extra.api.put<Profile>('profile', formData);
    return data;
  } catch (err) {
    console.error(err);
    return rejectWithValue(ProfileError.ServerError);
  }
});
