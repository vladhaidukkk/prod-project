import { useStore } from 'react-redux';
import { type StoreWithManager } from 'app/providers/store-provider';

export const useAppStore: () => StoreWithManager = () => {
  return useStore() as StoreWithManager;
};
