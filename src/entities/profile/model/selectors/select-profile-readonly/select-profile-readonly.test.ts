import { type StateSchema } from 'app/providers/store-provider';
import { selectProfileReadonly } from './select-profile-readonly';

describe('(Selector): selectProfileReadonly', () => {
  test('should return profile readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(selectProfileReadonly(state as StateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    expect(selectProfileReadonly({} as StateSchema)).toBe(true);
  });
});
