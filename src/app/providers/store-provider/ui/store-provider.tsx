import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initStore } from '../config/store';
import { type StateSchema, type AsyncReducers } from '../types';

type StoreProviderProps = {
  initialState?: StateSchema;
  asyncReducers?: AsyncReducers;
  children: ReactNode;
};

export const StoreProvider = ({ initialState, asyncReducers, children }: StoreProviderProps) => {
  const navigate = useNavigate();

  const store = initStore({ navigate, initialState, asyncReducers });

  return <Provider store={store}>{children}</Provider>;
};
