import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { LoginForm } from './login-form';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Light = Template.bind({});
Light.decorators = [
  StoreDecorator({
    login: {
      username: 'username',
      password: 'password',
    },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [
  StoreDecorator({
    login: {
      username: 'username',
      password: 'password',
    },
  }),
  ThemeDecorator(Themes.Dark),
];

export const Loading = Template.bind({});
Loading.decorators = [
  StoreDecorator({
    login: {
      username: 'username',
      password: 'password',
      loading: true,
    },
  }),
];

export const LoadingDark = Template.bind({});
LoadingDark.decorators = [
  StoreDecorator({
    login: {
      username: 'username',
      password: 'password',
      loading: true,
    },
  }),
  ThemeDecorator(Themes.Dark),
];

export const WithError = Template.bind({});
WithError.decorators = [
  StoreDecorator({
    login: {
      username: 'username',
      password: 'password',
      error: 'Error text',
    },
  }),
];

export const WithErrorDark = Template.bind({});
WithErrorDark.decorators = [
  StoreDecorator({
    login: {
      username: 'username',
      password: 'password',
      error: 'Error text',
    },
  }),
  ThemeDecorator(Themes.Dark),
];
