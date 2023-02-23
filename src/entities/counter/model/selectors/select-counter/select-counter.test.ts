import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/store-provider';
import { selectCounter } from './select-counter';

describe('selectCounter selector', () => {
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
