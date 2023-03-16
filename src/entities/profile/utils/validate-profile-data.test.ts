import { Country } from 'shared/consts/country';
import { Currency } from 'shared/consts/currency';
import { ProfileValidationError } from '../consts';
import { type Profile } from '../types';
import { validateProfileData } from './validate-profile-data';

describe('(Util): validateProfileData', () => {
  const defaultProfileData: Profile = {
    first: 'name',
    lastname: 'surname',
    age: 20,
    username: 'username',
    country: Country.Ukraine,
    city: 'city',
    currency: Currency.UAH,
    avatar: 'avatar',
  };

  test('should pass validation', () => {
    const profileData: Profile = defaultProfileData;
    expect(validateProfileData(profileData)).toEqual([]);
  });

  test('should fail validation on profile name', () => {
    const profileData: Profile = {
      ...defaultProfileData,
      first: undefined,
    };
    expect(validateProfileData(profileData)).toEqual([ProfileValidationError.IncorrectUserName]);
  });

  test('should fail validation on profile surname', () => {
    const profileData: Profile = {
      ...defaultProfileData,
      lastname: undefined,
    };
    expect(validateProfileData(profileData)).toEqual([ProfileValidationError.IncorrectUserName]);
  });

  test('should fail validation on profile age', () => {
    const profileData: Profile = {
      ...defaultProfileData,
      age: undefined,
    };
    expect(validateProfileData(profileData)).toEqual([ProfileValidationError.IncorrectUserAge]);
  });

  test('should fail validation on profile country', () => {
    const profileData: Profile = {
      ...defaultProfileData,
      country: undefined,
    };
    expect(validateProfileData(profileData)).toEqual([ProfileValidationError.IncorrectUserCountry]);
  });

  test('should fail validation on profile name, surname, age and country', () => {
    const profileData: Profile = {
      ...defaultProfileData,
      first: undefined,
      lastname: undefined,
      age: undefined,
      country: undefined,
    };
    expect(validateProfileData(profileData)).toEqual([
      ProfileValidationError.IncorrectUserName,
      ProfileValidationError.IncorrectUserAge,
      ProfileValidationError.IncorrectUserCountry,
    ]);
  });

  test('should fail validation on empty profile data', () => {
    expect(validateProfileData(undefined)).toEqual([ProfileValidationError.NoData]);
  });
});
