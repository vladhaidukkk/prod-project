import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/store-provider';
import { selectCounterValue } from './select-counter-value';

describe('(Selector): selectCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(selectCounterValue(state as StateSchema)).toBe(10);
  });
});
