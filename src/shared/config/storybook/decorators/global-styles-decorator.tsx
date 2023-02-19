import { type Story } from '@storybook/react';
// It's not bad to break FSD principles for non-production code
import 'app/styles/index.scss';

export const GlobalStylesDecorator = (StoryComponent: Story) => {
  return <StoryComponent />;
};
