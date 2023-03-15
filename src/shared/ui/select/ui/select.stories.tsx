import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { Select } from './select';

export default {
  title: 'shared/Select',
  component: Select,
  args: {
    label: 'Label',
    options: [
      { value: '1', content: 'Fist option' },
      { value: '2', content: 'Second option' },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Themes.Dark)];
