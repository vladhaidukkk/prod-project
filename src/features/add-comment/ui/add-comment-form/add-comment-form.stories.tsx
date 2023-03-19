import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook';
import AddCommentForm from './add-comment-form';

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSendComment: action('onSendComment'),
};
Default.decorators = [StoreDecorator({})];
