// import React from 'react';
// import Base from '../packages/terra-base/src/Base';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

// addon-info
setDefaults({
  header: false,
  inline: true,
});

function loadStories() {
  require('../packages/terra-badge/stories/index.jsx');
  require('../packages/terra-demographics-banner/stories/index.jsx');
}

configure(loadStories, module);
