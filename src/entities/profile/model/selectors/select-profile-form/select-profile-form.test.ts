import { type StateSchema } from 'app/providers/store-provider';
import { Country } from 'shared/consts/country';
import { Currency } from 'shared/consts/currency';
import { type Profile } from '../../../types';
import { selectProfileForm } from './select-profile-form';

describe('(Selector): selectProfileForm', () => {
  test('should return profile form', () => {
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
        form: profileData,
      },
    };
    expect(selectProfileForm(state as StateSchema)).toEqual(profileData);
  });

  test('should work with empty state', () => {
    expect(selectProfileForm({} as StateSchema)).toBeUndefined();
  });
});
