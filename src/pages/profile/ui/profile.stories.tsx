import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { Country } from 'shared/consts/country';
import { Currency } from 'shared/consts/currency';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import ProfilePage from './profile';

export default {
  title: 'pages/Profile',
  component: ProfilePage,
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.Dark)];
