import {
  type CombinedState,
  configureStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type NavigateFunction } from 'react-router-dom';
import { authReducer } from 'entities/auth';
import { counterReducer } from 'entities/counter';
import { createReducerManager } from './reducer-manager';
import {
  type ThunkExtraArg,
  type StateSchema,
  type StoreWithManager,
  type AsyncReducers,
} from '../types';
import { apiClient } from 'shared/api/api-client';

type InitStoreOptions = {
  navigate: NavigateFunction;
  initialState?: StateSchema;
  asyncReducers?: AsyncReducers;
};

export function initStore({ navigate, initialState, asyncReducers }: InitStoreOptions) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    auth: authReducer,
  };
  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: apiClient,
    // I think that's a bad practice to have redirects inside actions
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  }) as StoreWithManager;

  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof initStore>['dispatch'];
