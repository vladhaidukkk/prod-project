import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import ArticlesPage from './articles-page';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Default = Template.bind({});
Default.args = {};
