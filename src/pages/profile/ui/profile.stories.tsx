import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import ProfilePage from './profile';

export default {
  title: 'pages/Profile',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Themes.Dark)];
