import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { Sidebar } from './sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.decorators = [
  StoreDecorator({
    auth: {
      viewer: {},
    },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [
  StoreDecorator({
    auth: {
      viewer: {},
    },
  }),
  ThemeDecorator(Themes.Dark),
];

export const NoAuth = Template.bind({});
NoAuth.decorators = [StoreDecorator({})];
