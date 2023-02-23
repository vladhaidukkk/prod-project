import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { type StateSchema } from './types';

export function initStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
