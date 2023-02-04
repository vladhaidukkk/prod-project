import { FC, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './ThemeContext';

const initialTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) ?? Themes.Light;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(initialTheme);

  useEffect(() => {
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
