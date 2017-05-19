import React from 'react';
import ProgressBar from '../../../lib/ProgressBar';

const ProgressBarColor = () => (
  <div>
    <ProgressBar value={5} max={10} color="Orange" />
    <br />
    <br />
    <ProgressBar value={7.5} max={10} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar value={10} max={10} color="rgb(255, 0, 0)" />
  </div>
);

export default ProgressBarColor;
