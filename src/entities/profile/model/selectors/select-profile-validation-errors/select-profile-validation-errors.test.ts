import { type StateSchema } from 'app/providers/store-provider';
import { ProfileValidationError } from '../../../consts';
import { selectProfileValidationErrors } from './select-validation-errors';

describe('(Selector): selectProfileValidationErrors', () => {
  test('should return profile loading', () => {
    const validationErrors: ProfileValidationError[] = [
      ProfileValidationError.IncorrectUserAge,
      ProfileValidationError.IncorrectUserCountry,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validationErrors,
      },
    };
    expect(selectProfileValidationErrors(state as StateSchema)).toEqual(validationErrors);
  });

  test('should work with empty state', () => {
    expect(selectProfileValidationErrors({} as StateSchema)).toBeUndefined();
  });
});
