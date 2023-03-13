import { type Dispatch, type AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type ThunkConfig, type StateSchema } from 'app/providers/store-provider';
import { type NavigateFunction } from 'react-router-dom';

jest.mock('axios');

export class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
  readonly dispatch: Dispatch = jest.fn();
  readonly getState: () => StateSchema = jest.fn();
  readonly api = jest.mocked(axios);
  readonly navigate: NavigateFunction = jest.fn();

  constructor(
    private readonly asyncThunk: AsyncThunk<Returned, ThunkArg, ThunkConfig<RejectedValue>>
  ) {}

  exec(arg: ThunkArg) {
    const action = this.asyncThunk(arg);
    return action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });
  }
}
