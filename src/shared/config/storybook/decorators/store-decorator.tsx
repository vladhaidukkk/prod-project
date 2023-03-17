import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider, type AsyncReducers } from 'app/providers/store-provider';
import { articleDetailsReducer } from 'entities/article/model';
import { profileReducer } from 'entities/profile';
import { loginReducer } from 'features/auth-by-username/model';

const defaultAsyncReducers: AsyncReducers = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator =
  (initialState: DeepPartial<StateSchema>, asyncReducers?: AsyncReducers) =>
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
