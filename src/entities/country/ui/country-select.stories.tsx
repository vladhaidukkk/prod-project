import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { CountrySelect } from './country-select';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Default = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Themes.Dark)];
