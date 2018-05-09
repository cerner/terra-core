import React from 'react';
import ProgressBar from '../../lib/ProgressBar';

export default () => (
  <div>
    <ProgressBar value={8} max={10} color="blue" hasGradient />
  </div>
);
