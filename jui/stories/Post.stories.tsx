// Button.stories.ts|tsx

import type { Meta } from '@storybook/react';

import Posts from '../components/Posts/Posts';

const meta: Meta<typeof Posts> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Post',
  component: Posts,
};

export default meta;