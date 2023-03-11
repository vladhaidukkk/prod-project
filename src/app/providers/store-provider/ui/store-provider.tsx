import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { initStore } from '../config/store';
import { type StateSchema } from '../types';

type StoreProviderProps = {
  initialState?: StateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  children: ReactNode;
};

export const StoreProvider = ({ initialState, asyncReducers, children }: StoreProviderProps) => {
  const store = initStore(initialState, asyncReducers);
  return <Provider store={store}>{children}</Provider>;
};
