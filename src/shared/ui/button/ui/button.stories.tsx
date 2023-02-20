import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { Button } from './button';

export default {
  title: 'shared/Button',
  component: Button,
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'base',
    children: 'Text',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Filled
export const FilledPrimary = Template.bind({});

export const FilledPrimaryInverted = Template.bind({});
FilledPrimaryInverted.args = {
  inverted: true,
};

export const FilledBackground = Template.bind({});
FilledBackground.args = {
  color: 'background',
};

export const FilledBackgroundInverted = Template.bind({});
FilledBackgroundInverted.args = {
  color: 'background',
  inverted: true,
};

export const FilledPrimaryLg = Template.bind({});
FilledPrimaryLg.args = {
  size: 'lg',
};

export const FilledPrimaryXl = Template.bind({});
FilledPrimaryXl.args = {
  size: 'xl',
};

export const FilledPrimarySquare = Template.bind({});
FilledPrimarySquare.args = {
  square: true,
  children: 'x',
};

export const FilledPrimaryCompact = Template.bind({});
FilledPrimaryCompact.args = {
  compact: true,
};

export const FilledPrimaryDark = Template.bind({});
FilledPrimaryDark.decorators = [ThemeDecorator(Themes.Dark)];

export const FilledPrimaryInvertedDark = Template.bind({});
FilledPrimaryInvertedDark.args = {
  inverted: true,
};
FilledPrimaryInvertedDark.decorators = [ThemeDecorator(Themes.Dark)];

export const FilledBackgroundDark = Template.bind({});
FilledBackgroundDark.args = {
  color: 'background',
};
FilledBackgroundDark.decorators = [ThemeDecorator(Themes.Dark)];

export const FilledBackgroundInvertedDark = Template.bind({});
FilledBackgroundInvertedDark.args = {
  color: 'background',
  inverted: true,
};
FilledBackgroundInvertedDark.decorators = [ThemeDecorator(Themes.Dark)];

// Outlined
export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  variant: 'outlined',
};

export const OutlinedPrimaryInverted = Template.bind({});
OutlinedPrimaryInverted.args = {
  variant: 'outlined',
  inverted: true,
};

export const OutlinedBackground = Template.bind({});
OutlinedBackground.args = {
  variant: 'outlined',
  color: 'background',
};

export const OutlinedBackgroundInverted = Template.bind({});
OutlinedBackgroundInverted.args = {
  variant: 'outlined',
  color: 'background',
  inverted: true,
};

export const OutlinedPrimaryLg = Template.bind({});
OutlinedPrimaryLg.args = {
  variant: 'outlined',
  size: 'lg',
};

export const OutlinedPrimaryXl = Template.bind({});
OutlinedPrimaryXl.args = {
  variant: 'outlined',
  size: 'xl',
};

export const OutlinedPrimarySquare = Template.bind({});
OutlinedPrimarySquare.args = {
  variant: 'outlined',
  square: true,
  children: 'x',
};

export const OutlinedPrimaryCompact = Template.bind({});
OutlinedPrimaryCompact.args = {
  variant: 'outlined',
  compact: true,
};

export const OutlinedPrimaryDark = Template.bind({});
OutlinedPrimaryDark.args = {
  variant: 'outlined',
};
OutlinedPrimaryDark.decorators = [ThemeDecorator(Themes.Dark)];

export const OutlinedPrimaryInvertedDark = Template.bind({});
OutlinedPrimaryInvertedDark.args = {
  variant: 'outlined',
  inverted: true,
};
OutlinedPrimaryInvertedDark.decorators = [ThemeDecorator(Themes.Dark)];

export const OutlinedBackgroundDark = Template.bind({});
OutlinedBackgroundDark.args = {
  variant: 'outlined',
  color: 'background',
};
OutlinedBackgroundDark.decorators = [ThemeDecorator(Themes.Dark)];

export const OutlinedBackgroundInvertedDark = Template.bind({});
OutlinedBackgroundInvertedDark.args = {
  variant: 'outlined',
  color: 'background',
  inverted: true,
};
OutlinedBackgroundInvertedDark.decorators = [ThemeDecorator(Themes.Dark)];

// Text
export const TextPrimary = Template.bind({});
TextPrimary.args = {
  variant: 'text',
};

export const TextPrimaryInverted = Template.bind({});
TextPrimaryInverted.args = {
  variant: 'text',
  inverted: true,
};

export const TextBackground = Template.bind({});
TextBackground.args = {
  variant: 'text',
  color: 'background',
};

export const TextBackgroundInverted = Template.bind({});
TextBackgroundInverted.args = {
  variant: 'text',
  color: 'background',
  inverted: true,
};

export const TextPrimaryLg = Template.bind({});
TextPrimaryLg.args = {
  variant: 'text',
  size: 'lg',
};

export const TextPrimaryXl = Template.bind({});
TextPrimaryXl.args = {
  variant: 'text',
  size: 'xl',
};

export const TextPrimarySquare = Template.bind({});
TextPrimarySquare.args = {
  variant: 'text',
  square: true,
  children: 'x',
};

export const TextPrimaryCompact = Template.bind({});
TextPrimaryCompact.args = {
  variant: 'text',
  compact: true,
};

export const TextPrimaryDark = Template.bind({});
TextPrimaryDark.args = {
  variant: 'text',
};
TextPrimaryDark.decorators = [ThemeDecorator(Themes.Dark)];

export const TextPrimaryInvertedDark = Template.bind({});
TextPrimaryInvertedDark.args = {
  variant: 'text',
  inverted: true,
};
TextPrimaryInvertedDark.decorators = [ThemeDecorator(Themes.Dark)];

export const TextBackgroundDark = Template.bind({});
TextBackgroundDark.args = {
  variant: 'text',
  color: 'background',
};
TextBackgroundDark.decorators = [ThemeDecorator(Themes.Dark)];

export const TextBackgroundInvertedDark = Template.bind({});
TextBackgroundInvertedDark.args = {
  variant: 'text',
  color: 'background',
  inverted: true,
};
TextBackgroundInvertedDark.decorators = [ThemeDecorator(Themes.Dark)];
