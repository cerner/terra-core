import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ProgressBar from 'terra-progress-bar/lib/ProgressBar';

const ProgressBarGradient = () => (
  <div>
    <ProgressBar value={3} max={10} color="green" hasGradient />
    <br />
    <br />
    <ProgressBar value={5} max={10} color="Orange" hasGradient />
    <br />
    <br />
    <ProgressBar value={8} max={10} color="blue" hasGradient />
  </div>
);

export default ProgressBarGradient;
