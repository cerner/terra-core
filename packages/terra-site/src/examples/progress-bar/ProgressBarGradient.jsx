import React from 'react';
import ProgressBar from 'terra-progress-bar';

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
