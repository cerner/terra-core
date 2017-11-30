import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

// addon-info
setDefaults({
  header: false,
  inline: true,
});

const styles = {
  padding: 20
};

const Padding = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(Padding);

function loadStories() {
  require('../packages/terra-badge/stories/index.jsx');
  require('../packages/terra-demographics-banner/stories/index.jsx');
}

configure(loadStories, module);
