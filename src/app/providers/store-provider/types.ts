import {
  type CombinedState,
  type AnyAction,
  type ReducersMapObject,
  type Reducer,
  type EnhancedStore,
} from '@reduxjs/toolkit';
import { type CounterSchema } from 'entities/counter';
import { type AuthSchema } from 'entities/auth';
import { type LoginSchema } from 'features/auth-by-username';
import { type ProfileSchema } from 'entities/profile';

export type StateSchema = {
  counter: CounterSchema;
  auth: AuthSchema;

  // Async reducers
  login?: LoginSchema;
  profile?: ProfileSchema;
};

export type StateSchemaKey = keyof StateSchema;

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => boolean;
  remove: (key: StateSchemaKey) => boolean;
};

export type StoreWithManager = EnhancedStore<StateSchema> & {
  reducerManager: ReducerManager;
};
