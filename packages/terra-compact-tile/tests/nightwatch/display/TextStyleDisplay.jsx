import React from 'react';

import Display from '../../../lib/Display';

const SecondaryDisplay = () => <Display text="test text" textStyle="secondary" />;
const AttentionDisplay = () => <Display text="test text" textStyle="attention" />;
const StrikeThroughDisplay = () => <Display text="test text" textStyle="strike-through" />;

export {
  SecondaryDisplay,
  AttentionDisplay,
  StrikeThroughDisplay,
};
