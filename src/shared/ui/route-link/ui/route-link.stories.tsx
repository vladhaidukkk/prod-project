import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { RouteLinkVariants } from '../consts';
import { RouteLink } from './route-link';

export default {
  title: 'shared/RouteLink',
  component: RouteLink,
  args: {
    to: '/',
    children: 'Link',
  },
} as ComponentMeta<typeof RouteLink>;

const Template: ComponentStory<typeof RouteLink> = (args) => <RouteLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: RouteLinkVariants.Primary,
};

export const PrimaryDark = Template.bind({});
Primary.args = { ...Primary.args };
Primary.decorators = [ThemeDecorator(Themes.Dark)];

export const Inverted = Template.bind({});
Inverted.args = {
  variant: RouteLinkVariants.Inverted,
};

export const InvertedDark = Template.bind({});
Inverted.args = { ...Inverted.args };
Inverted.decorators = [ThemeDecorator(Themes.Dark)];
