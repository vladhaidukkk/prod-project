import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { CommentCard } from './comment-card';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  comment: {
    id: '1',
    text: 'Comment',
    user: {
      id: '1',
      username: 'User',
      avatar:
        'https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/en/19/EP4396-CUSA10659_00-AV00000000000118/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000',
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
