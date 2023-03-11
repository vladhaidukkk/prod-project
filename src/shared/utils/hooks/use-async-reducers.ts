import { type Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type StateSchemaKey, type StoreWithManager } from 'app/providers/store-provider/types';
import { typedEntries } from 'shared/utils/helpers';

export type ReducersRecord = {
  [key in StateSchemaKey]?: {
    reducer: Reducer;
    destroy?: boolean;
  };
};

export const useAsyncReducers = (reducers: ReducersRecord) => {
  const store = useStore() as StoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const entries = typedEntries(reducers);

    for (const [key, { reducer }] of entries) {
      const added = store.reducerManager.add(key, reducer);
      if (added) {
        dispatch({ type: `@INIT ${key} reducer` });
      }
    }

    return () => {
      for (const [key, { destroy }] of entries) {
        if (destroy) {
          const removed = store.reducerManager.remove(key);
          if (removed) {
            dispatch({ type: `@DESTROY ${key} reducer` });
          }
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
