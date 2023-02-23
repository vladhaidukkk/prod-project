import { type StateSchema } from 'app/providers/store-provider';

export const selectCounter = (state: StateSchema) => {
  return state.counter;
};
