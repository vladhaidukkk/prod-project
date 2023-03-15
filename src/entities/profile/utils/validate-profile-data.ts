import { ProfileValidationError } from '../consts';
import { type Profile } from '../types';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ProfileValidationError.NoData];
  }

  const { first, lastname, age, country } = profile;
  const errors: ProfileValidationError[] = [];

  if (!first?.trim() || !lastname?.trim()) {
    errors.push(ProfileValidationError.IncorrectUserName);
  }

  if (!age || !Number.isInteger(age) || age < 0) {
    errors.push(ProfileValidationError.IncorrectUserAge);
  }

  if (!country) {
    errors.push(ProfileValidationError.IncorrectUserCountry);
  }

  return errors;
};
