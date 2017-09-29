import { configure } from '@storybook/react';

function loadStories() {
  require('../packages/terra-badge/stories/index.jsx');
}

configure(loadStories, module);
