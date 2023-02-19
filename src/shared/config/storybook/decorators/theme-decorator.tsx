import { type Story } from '@storybook/react';
import { type Themes } from 'shared/config/theme';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) => {
  document.documentElement.className = theme;
  return <StoryComponent />;
};
