import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { Themes } from 'shared/config/theme';
import { ButtonVariants } from '../consts';
import { Button } from './button';

export default {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Text',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Themes.Dark)];

export const Clear = Template.bind({});
Clear.args = {
  variant: ButtonVariants.Clear,
};

export const ClearDark = Template.bind({});
ClearDark.args = { ...Clear.args };
ClearDark.decorators = [ThemeDecorator(Themes.Dark)];

export const Outline = Template.bind({});
Outline.args = {
  variant: ButtonVariants.Outline,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = { ...Outline.args };
OutlineDark.decorators = [ThemeDecorator(Themes.Dark)];
