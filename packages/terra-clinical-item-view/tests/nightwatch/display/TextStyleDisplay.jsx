import React from 'react';

import Display from '../../../lib/Display';

const views = () => (
  <div>
    <Display text="test text" textStyle="secondary" id="test-display-secondary" />
    <Display text="test text" textStyle="attention" id="test-display-attention" />
    <Display text="test text" textStyle="strikeThrough" id="test-display-strike-through" />
  </div>
);

export default views;
