import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { Skeleton } from './skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '100%',
  height: 200,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = { ...Default.args };
DefaultDark.decorators = [ThemeDecorator(Themes.Dark)];

export const Circle = Template.bind({});
Circle.args = {
  width: 100,
  height: 100,
  borderRadius: '50%',
};

export const CircleDark = Template.bind({});
CircleDark.args = { ...Circle.args };
CircleDark.decorators = [ThemeDecorator(Themes.Dark)];
