import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { Sidebar } from './sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.Dark)];
