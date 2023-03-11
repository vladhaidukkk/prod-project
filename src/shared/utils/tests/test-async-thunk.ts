import { type Dispatch, type AsyncThunk } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/store-provider';

export class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
  readonly dispatch: Dispatch = jest.fn();
  readonly getState: () => StateSchema = jest.fn();

  constructor(
    private readonly asyncThunk: AsyncThunk<Returned, ThunkArg, { rejectValue: RejectedValue }>
  ) {}

  exec(arg: ThunkArg) {
    const action = this.asyncThunk(arg);
    return action(this.dispatch, this.getState, undefined);
  }
}
