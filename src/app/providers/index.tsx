import { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/config/theme';
import 'shared/config/i18n';

export const Providers: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Suspense fallback="">{children}</Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};
