import { type DeepPartial } from '@reduxjs/toolkit';
import { type CounterSchema } from 'entities/counter/types';
import { counterActions, counterReducer } from './counter-slice';

describe('(Reducer): counterReducer', () => {
  test('should increment counter value', () => {
    const counterState: DeepPartial<CounterSchema> = {
      value: 10,
    };
    expect(counterReducer(counterState as CounterSchema, counterActions.incremented())).toEqual({
      value: 11,
    });
  });

  test('should increment counter value without initial state', () => {
    expect(counterReducer(undefined, counterActions.incremented())).toEqual({
      value: 1,
    });
  });

  test('should decrement counter value', () => {
    const counterState: DeepPartial<CounterSchema> = {
      value: 10,
    };
    expect(counterReducer(counterState as CounterSchema, counterActions.decremented())).toEqual({
      value: 9,
    });
  });

  test('should decrement counter value without initial state', () => {
    expect(counterReducer(undefined, counterActions.decremented())).toEqual({
      value: -1,
    });
  });
});
