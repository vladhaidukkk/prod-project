import { createSelector } from '@reduxjs/toolkit';
import { selectCounter } from '../select-counter/select-counter';

// Here createSelector isn't useful and maybe even bad, because of memoization
export const selectCounterValue = createSelector(selectCounter, (counter) => {
  return counter.value;
});
