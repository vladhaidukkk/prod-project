import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { initStore } from '../config';
import { type StateSchema } from '../types';

type StoreProviderProps = {
  initialState?: StateSchema;
  children: ReactNode;
};

export const StoreProvider = ({ initialState, children }: StoreProviderProps) => {
  const store = initStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};
