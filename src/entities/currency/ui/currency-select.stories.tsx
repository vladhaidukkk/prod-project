import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { CurrencySelect } from './currency-select';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Default = Template.bind({});

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Themes.Dark)];
