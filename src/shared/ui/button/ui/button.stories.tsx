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

export const FilledBackground = Template.bind({});
FilledBackground.args = {
  color: 'background',
};

export const FilledInvertedBackground = Template.bind({});
FilledInvertedBackground.args = {
  color: 'invertedBackground',
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

export const FilledBackgroundDark = Template.bind({});
FilledBackgroundDark.args = {
  color: 'background',
};
FilledBackgroundDark.decorators = [ThemeDecorator(Themes.Dark)];

export const FilledInvertedBackgroundDark = Template.bind({});
FilledInvertedBackgroundDark.args = {
  color: 'invertedBackground',
};
FilledInvertedBackgroundDark.decorators = [ThemeDecorator(Themes.Dark)];

// Outlined
export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  variant: 'outlined',
};

export const OutlinedBackground = Template.bind({});
OutlinedBackground.args = {
  variant: 'outlined',
  color: 'background',
};

export const OutlinedInvertedBackground = Template.bind({});
OutlinedInvertedBackground.args = {
  variant: 'outlined',
  color: 'invertedBackground',
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

export const OutlinedBackgroundDark = Template.bind({});
OutlinedBackgroundDark.args = {
  variant: 'outlined',
  color: 'background',
};
OutlinedBackgroundDark.decorators = [ThemeDecorator(Themes.Dark)];

export const OutlinedInvertedBackgroundDark = Template.bind({});
OutlinedInvertedBackgroundDark.args = {
  variant: 'outlined',
  color: 'invertedBackground',
};
OutlinedInvertedBackgroundDark.decorators = [ThemeDecorator(Themes.Dark)];

// Text
export const TextPrimary = Template.bind({});
TextPrimary.args = {
  variant: 'text',
};

export const TextBackground = Template.bind({});
TextBackground.args = {
  variant: 'text',
  color: 'background',
};

export const TextInvertedBackground = Template.bind({});
TextInvertedBackground.args = {
  variant: 'text',
  color: 'invertedBackground',
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

export const TextBackgroundDark = Template.bind({});
TextBackgroundDark.args = {
  variant: 'text',
  color: 'background',
};
TextBackgroundDark.decorators = [ThemeDecorator(Themes.Dark)];

export const TextInvertedBackgroundDark = Template.bind({});
TextInvertedBackgroundDark.args = {
  variant: 'text',
  color: 'invertedBackground',
};
TextInvertedBackgroundDark.decorators = [ThemeDecorator(Themes.Dark)];
