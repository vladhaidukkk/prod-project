import { useContext } from 'react';
import { Themes } from './consts';
import { ThemeContext, ThemeContextValue } from './config';

type UseThemeResult = {
  toggleTheme: () => void;
} & ThemeContextValue;

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === Themes.Light ? Themes.Dark : Themes.Light);
  };

  return {
    theme,
    setTheme,
    toggleTheme,
  };
};
