import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { Navbar } from './navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.Dark)];

export const Logged = Template.bind({});
Logged.decorators = [
  StoreDecorator({
    auth: { viewer: { id: '1', username: 'username' } },
  }),
];

export const LoggedDark = Template.bind({});
LoggedDark.decorators = [
  StoreDecorator({ auth: { viewer: { id: '1', username: 'username' } } }),
  ThemeDecorator(Themes.Dark),
];
