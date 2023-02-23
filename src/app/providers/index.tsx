import { type FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/config/theme';
import { ErrorBoundary } from './error-boundary';
import { StoreProvider } from './store-provider';
import 'shared/config/i18n/i18n-for-app';

export const Providers: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <StoreProvider>
        {/* Suspense for i18next */}
        <Suspense fallback="">
          <ErrorBoundary>
            <ThemeProvider>{children}</ThemeProvider>
          </ErrorBoundary>
        </Suspense>
      </StoreProvider>
    </BrowserRouter>
  );
};
