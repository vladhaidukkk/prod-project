import { ReactNode } from 'react';
import { ThemeProvider } from 'shared/config/theme';

export const withTheme = (component: () => ReactNode) => () => {
  return <ThemeProvider>{component()}</ThemeProvider>;
};
