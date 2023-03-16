import { Country } from 'shared/consts/country';
import { Currency } from 'shared/consts/currency';
import { TestAsyncThunk } from 'shared/utils/tests';
import { ProfileError } from '../../../consts';
import { type Profile } from '../../../types';
import { fetchProfileData } from './fetch-profile-data';

describe('(Async action): fetchProfileData', () => {
  test('should be fulfilled', async () => {
    const profileData: Profile = {
      first: 'name',
      lastname: 'surname',
      age: 20,
      username: 'username',
      country: Country.Ukraine,
      city: 'city',
      currency: Currency.UAH,
      avatar: 'avatar',
    };

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockResolvedValueOnce({ data: profileData });
    const result = await thunk.exec();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  test('should be rejected', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockRejectedValueOnce({ status: 403 });
    const result = await thunk.exec();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(ProfileError.ServerError);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
