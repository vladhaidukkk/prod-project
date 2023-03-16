import { type StateSchema } from 'app/providers/store-provider';
import { Country } from 'shared/consts/country';
import { Currency } from 'shared/consts/currency';
import { type Profile } from '../../../types';
import { selectProfileData } from './select-profile-data';

describe('(Selector): selectProfileData', () => {
  test('should return profile data', () => {
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
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: profileData,
      },
    };
    expect(selectProfileData(state as StateSchema)).toEqual(profileData);
  });

  test('should work with empty state', () => {
    expect(selectProfileData({} as StateSchema)).toBeUndefined();
  });
});
