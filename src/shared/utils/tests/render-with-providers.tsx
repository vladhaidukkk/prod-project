import { type DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { type StateSchema, StoreProvider } from 'app/providers/store-provider';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter, type MemoryRouterProps } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18n-for-tests';

type RenderWithProvidersOptions = {
  routes?: MemoryRouterProps['initialEntries'];
  initialState?: DeepPartial<StateSchema>;
};

export function renderWithProviders(
  component: ReactNode,
  { routes = ['/'], initialState }: RenderWithProvidersOptions = {}
) {
  return render(
    <MemoryRouter initialEntries={routes}>
      <StoreProvider initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}
