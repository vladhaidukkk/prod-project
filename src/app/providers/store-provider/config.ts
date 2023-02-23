import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { authReducer } from 'entities/auth';
import { counterReducer } from 'entities/counter';
import { type StateSchema } from './types';

export function initStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    auth: authReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
