import { configureStore, type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { authReducer } from 'entities/auth';
import { counterReducer } from 'entities/counter';
import { createReducerManager } from './reducer-manager';
import { type StateSchema } from '../types';

export function initStore(
  initialState?: StateSchema,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    auth: authReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
    // @ts-ignore
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof initStore>['dispatch'];
