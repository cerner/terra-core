import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ProgressBar from 'terra-progress-bar/lib/ProgressBar';

const ProgressBarGradient = () => (
  <div>
    <ProgressBar valueText="3%" value={3} max={10} color="green" hasGradient />
    <br />
    <br />
    <ProgressBar valueText="5%" value={5} max={10} color="Orange" hasGradient />
    <br />
    <br />
    <ProgressBar valueText="8%" value={8} max={10} color="blue" hasGradient />
  </div>
);

export default ProgressBarGradient;
