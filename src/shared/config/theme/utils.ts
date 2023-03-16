import { useContext } from 'react';
import { Themes } from './consts';
import { ThemeContext, type ThemeContextValue } from './config';

type UseThemeResult = {
  toggleTheme: () => void;
} & ThemeContextValue;

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((value) => {
      switch (value) {
        case Themes.Light:
          return Themes.Dark;
        case Themes.Dark:
          return Themes.Orange;
        case Themes.Orange:
          return Themes.Light;
        default:
          return Themes.Light;
      }
    });
  };

  return {
    theme,
    setTheme,
    toggleTheme,
  };
};
