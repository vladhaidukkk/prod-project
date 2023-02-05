import { createContext, Dispatch, SetStateAction } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Themes } from './consts';

export type ThemeContextValue = {
  theme: Themes;
  setTheme: Dispatch<SetStateAction<Themes>>;
};

export const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export const initialTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) ?? Themes.Light;
