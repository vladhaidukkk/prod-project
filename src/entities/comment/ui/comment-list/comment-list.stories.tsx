import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { CommentList } from './comment-list';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Default = Template.bind({});
Default.args = {
  comments: [
    {
      id: '1',
      text: 'Comment 1',
      user: {
        id: '1',
        username: 'User 1',
        avatar:
          'https://store.playstation.com/store/api/chihiro/00_09_000/container/TR/en/19/EP4396-CUSA10659_00-AV00000000000118/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000',
      },
    },
    {
      id: '2',
      text: 'Comment 2',
      user: {
        id: '2',
        username: 'User 2',
        avatar:
          'https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/99/EP2402-CUSA05624_00-AV00000000000230/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720',
      },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  loading: true,
};
