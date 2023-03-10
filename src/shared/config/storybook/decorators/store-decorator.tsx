import { type DeepPartial } from '@reduxjs/toolkit';
import { type Story } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/store-provider';

export const StoreDecorator =
  (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
    return (
      <StoreProvider initialState={initialState as StateSchema}>
        <StoryComponent />
      </StoreProvider>
    );
  };
