import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Themes } from 'shared/config/theme';
import { Modal } from './modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    open: true,
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium nam omnis reprehenderit doloribus dolorum magnam dignissimos fugiat aperiam, consequuntur deleniti tempore molestiae facilis esse, dolor debitis, molestias in optio vel!',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Themes.Dark)];
