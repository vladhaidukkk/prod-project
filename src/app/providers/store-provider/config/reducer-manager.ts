import {
  type AnyAction,
  combineReducers,
  type ReducersMapObject,
  type Reducer,
} from '@reduxjs/toolkit';
import { type ReducerManager, type StateSchema, type AsyncStateSchemaKey } from '../types';

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: AsyncStateSchemaKey[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },
    add: (key: AsyncStateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return false;
      }

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
      return true;
    },
    remove: (key: AsyncStateSchemaKey) => {
      if (!key || !reducers[key]) {
        return false;
      }

      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
      return true;
    },
  };
}
