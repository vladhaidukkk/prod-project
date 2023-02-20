import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import AboutPage from './about';

export default {
  title: 'pages/About',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.Dark)];
