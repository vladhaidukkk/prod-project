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
  text: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Themes.Dark)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Text',
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

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Text',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Text',
};
OnlyTextDark.decorators = [ThemeDecorator(Themes.Dark)];
