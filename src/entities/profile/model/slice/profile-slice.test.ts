import { ProfileError, ProfileValidationError } from 'entities/profile/consts';
import { type Profile, type ProfileSchema } from '../../types';
import { fetchProfileData } from '../actions/fetch-profile-data/fetch-profile-data';
import { profileActions, profileReducer } from './profile-slice';

describe('(Reducer): profileReducer', () => {
  test('should set readonly', () => {
    const profileState: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(profileState as ProfileSchema, profileActions.readonlySet(true))).toEqual(
      {
        readonly: true,
      }
    );
  });

  test('should edit profile', () => {
    const profileState: DeepPartial<ProfileSchema> = {
      form: {
        first: 'name',
        lastname: 'surname',
        age: 20,
      },
    };
    expect(
      profileReducer(
        profileState as ProfileSchema,
        profileActions.profileEdited({
          first: 'new-name',
          lastname: 'new-surname',
        })
      )
    ).toEqual({
      form: {
        first: 'new-name',
        lastname: 'new-surname',
        age: 20,
      },
    });
  });

  test('should cancel editing ', () => {
    const profileState: DeepPartial<ProfileSchema> = {
      data: {
        first: 'name',
        lastname: 'surname',
        age: 20,
      },
      form: {
        first: 'new-name',
        lastname: 'new-surname',
        age: 20,
      },
      readonly: false,
      validationErrors: [ProfileValidationError.IncorrectUserCountry],
    };
    expect(profileReducer(profileState as ProfileSchema, profileActions.editCanceled())).toEqual({
      data: {
        first: 'name',
        lastname: 'surname',
        age: 20,
      },
      form: {
        first: 'name',
        lastname: 'surname',
        age: 20,
      },
      readonly: true,
      validationErrors: undefined,
    });
  });

  test('fetchProfileData pending should work', () => {
    const profileState: DeepPartial<ProfileSchema> = {
      loading: false,
      error: ProfileError.ServerError,
    };
    expect(profileReducer(profileState as ProfileSchema, fetchProfileData.pending)).toEqual({
      loading: true,
      error: undefined,
    });
  });

  test('fetchProfileData fulfilled should work', () => {
    const profileState: DeepPartial<ProfileSchema> = {
      loading: true,
    };
    const profileData: Profile = {
      first: 'name',
      lastname: 'surname',
      age: 20,
    };
    expect(
      profileReducer(profileState as ProfileSchema, fetchProfileData.fulfilled(profileData, ''))
    ).toEqual({
      data: profileData,
      form: profileData,
      loading: false,
    });
  });
});
