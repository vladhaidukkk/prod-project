import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit';
import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/store-provider';
import { profileReducer } from 'entities/profile';
import { loginReducer } from 'features/auth-by-username/model';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  login: loginReducer,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  profile: profileReducer,
};

export const StoreDecorator =
  (
    initialState: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={initialState as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
