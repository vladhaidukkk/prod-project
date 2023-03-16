import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { Country } from 'shared/consts/country';
import { Currency } from 'shared/consts/currency';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './profile-card';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  args: {
    data: {
      first: 'Name',
      lastname: 'Surname',
      age: 19,
      username: 'Username',
      country: Country.Ukraine,
      city: 'Lviv',
      currency: Currency.UAH,
      avatar: AvatarImg,
    },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.Dark)];

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'error',
};

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
};
