import { addDecorator } from '@storybook/react';
import { Themes } from '../../src/shared/config/theme';
import {
  GlobalStylesDecorator,
  ThemeDecorator,
  RouterDecorator,
} from '../../src/shared/config/storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Or we can just import global styles in preview.ts, without decorator
addDecorator(GlobalStylesDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Themes.Light));
