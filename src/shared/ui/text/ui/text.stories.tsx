import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { Text } from './text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  description: 'Description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  description: 'Description',
};
PrimaryDark.decorators = [ThemeDecorator(Themes.Dark)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  description: 'Description',
  color: 'error',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Themes.Dark)];

export const OnlyDescription = Template.bind({});
OnlyDescription.args = {
  description: 'Description',
};

export const OnlyDescriptionDark = Template.bind({});
OnlyDescriptionDark.args = {
  description: 'Description',
};
OnlyDescriptionDark.decorators = [ThemeDecorator(Themes.Dark)];
