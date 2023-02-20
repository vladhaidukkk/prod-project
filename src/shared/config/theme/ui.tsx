import { type FC, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, type Themes } from './consts';
import { initialTheme, ThemeContext } from './config';

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(initialTheme);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
