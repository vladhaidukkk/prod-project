import { useContext } from 'react';
import { ThemeContext, Themes, ThemeContextValue } from './ThemeContext';

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
