import React from 'react';
import ProgressBar from '../../../ProgressBar';

export default () => (
  <div>
    <ProgressBar valueText="8%" value={8} max={10} color="blue" hasGradient />
  </div>
);
