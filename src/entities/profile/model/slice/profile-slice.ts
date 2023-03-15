import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Profile, type ProfileSchema } from '../../types';
import { fetchProfileData } from '../actions/fetch-profile-data/fetch-profile-data';
import { updateProfileData } from '../actions/update-profile-data/update-profile-data';

const initialState: ProfileSchema = {
  loading: false,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    readonlySet: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    profileEdited: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    editCanceled: (state) => {
      state.readonly = true;
      state.validationErrors = undefined;
      state.form = state.data;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined;
        state.validationErrors = undefined;
        state.loading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.loading = false;
        if (Array.isArray(action.payload)) {
          state.validationErrors = action.payload;
        } else {
          state.error = action.payload;
        }
      }),
});

export const { reducer: profileReducer, actions: profileActions } = profileSlice;
