import { type StateSchema } from 'app/providers/store-provider';
import { selectCounter } from './select-counter';

describe('(Selector): selectCounter', () => {
  test('should return counter state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(selectCounter(state as StateSchema)).toEqual({
      value: 10,
    });
  });
});
