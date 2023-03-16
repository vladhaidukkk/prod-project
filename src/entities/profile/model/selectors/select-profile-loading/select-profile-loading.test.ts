import { type StateSchema } from 'app/providers/store-provider';
import { selectProfileLoading } from './select-profile-loading';

describe('(Selector): selectProfileLoading', () => {
  test('should return profile loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        loading: true,
      },
    };
    expect(selectProfileLoading(state as StateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    expect(selectProfileLoading({} as StateSchema)).toBe(false);
  });
});
