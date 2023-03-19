import { Country } from 'shared/consts/country';
import { Currency } from 'shared/consts/currency';
import { TestAsyncThunk } from 'shared/utils/tests';
import { ProfileError, ProfileValidationError } from '../../../consts';
import { type Profile } from '../../../types';
import { updateProfileData } from './update-profile-data';

describe('(Async action): updateProfileData', () => {
  const profileData: Profile = {
    id: '1',
    first: 'name',
    lastname: 'surname',
    age: 20,
    username: 'username',
    country: Country.Ukraine,
    city: 'city',
    currency: Currency.UAH,
    avatar: 'avatar',
  };

  test('should be fulfilled', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });
    thunk.api.put.mockResolvedValueOnce({ data: profileData });
    const result = await thunk.exec('');

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  test('should be rejected', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });
    thunk.api.put.mockRejectedValueOnce({ status: 403 });
    const result = await thunk.exec('');

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(ProfileError.ServerError);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  test('should fail on validation', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...profileData, age: undefined },
      },
    });
    thunk.api.put.mockRejectedValueOnce({ status: 403 });
    const result = await thunk.exec('');

    expect(thunk.api.put).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ProfileValidationError.IncorrectUserAge]);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
