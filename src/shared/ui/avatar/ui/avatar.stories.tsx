import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Avatar } from './avatar';
import AvatarImg from './storybook.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: AvatarImg,
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 50,
};

export const Big = Template.bind({});
Big.args = {
  size: 150,
};
