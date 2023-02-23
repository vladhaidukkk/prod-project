import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { Input } from './input';

export default {
  title: 'shared/Input',
  component: Input,
  args: {
    value: 'text',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Themes.Dark)];

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithPlaceholderDark = Template.bind({});
WithPlaceholderDark.args = {
  placeholder: 'Placeholder',
};
WithPlaceholderDark.decorators = [ThemeDecorator(Themes.Dark)];
