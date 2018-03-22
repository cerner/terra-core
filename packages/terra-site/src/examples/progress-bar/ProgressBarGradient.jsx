import React from 'react';
import ProgressBar from 'terra-progress-bar';

const ProgressBarDefault = () => (
  <div>
    <ProgressBar value={3} max={10} color="green" gradient />
    <br />
    <br />
    <ProgressBar value={5} max={10} color="Orange" gradient />
    <br />
    <br />
    <ProgressBar value={8} max={10} color="blue" gradient />
  </div>
);

export default ProgressBarDefault;
