import {
  type CombinedState,
  type AnyAction,
  type ReducersMapObject,
  type Reducer,
  type EnhancedStore,
  type MiddlewareArray,
  type ThunkMiddleware,
} from '@reduxjs/toolkit';
import { type CounterSchema } from 'entities/counter';
import { type AuthSchema } from 'entities/auth';
import { type LoginSchema } from 'features/auth-by-username';
import { type ProfileSchema } from 'entities/profile';
import { type AxiosInstance } from 'axios';
import { type NavigateFunction } from 'react-router-dom';

export type AsyncStateSchema = {
  login?: LoginSchema;
  profile?: ProfileSchema;
};

export type AsyncStateSchemaKey = keyof AsyncStateSchema;

export type AsyncReducers = {
  [key in AsyncStateSchemaKey]?: Reducer;
};

export type StateSchema = {
  counter: CounterSchema;
  auth: AuthSchema;
} & AsyncStateSchema;

export type StateSchemaKey = keyof StateSchema;

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: AsyncStateSchemaKey, reducer: Reducer) => boolean;
  remove: (key: AsyncStateSchemaKey) => boolean;
};

export type StoreWithManager = EnhancedStore<
  StateSchema,
  AnyAction,
  MiddlewareArray<[ThunkMiddleware<StateSchema, AnyAction, ThunkExtraArg>]>
> & {
  reducerManager: ReducerManager;
};

export type ThunkExtraArg = {
  api: AxiosInstance;
  navigate: NavigateFunction;
};

export type ThunkConfig<RejectedValue> = {
  rejectValue: RejectedValue;
  state: StateSchema;
  extra: ThunkExtraArg;
};
