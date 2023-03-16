import { type StateSchema } from 'app/providers/store-provider';
import { ProfileError } from '../../../consts';
import { selectProfileError } from './select-profile-error';

describe('(Selector): selectProfileError', () => {
  test('should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: ProfileError.ServerError,
      },
    };
    expect(selectProfileError(state as StateSchema)).toBe(ProfileError.ServerError);
  });

  test('should work with empty state', () => {
    expect(selectProfileError({} as StateSchema)).toBeUndefined();
  });
});
