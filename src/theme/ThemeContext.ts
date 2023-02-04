import { createContext, Dispatch, SetStateAction } from 'react';

export const enum Themes {
  Light = 'light',
  Dark = 'dark',
}

export type ThemeContextValue = {
  theme: Themes;
  setTheme: Dispatch<SetStateAction<Themes>>;
};

export const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export const LOCAL_STORAGE_THEME_KEY = 'theme';
