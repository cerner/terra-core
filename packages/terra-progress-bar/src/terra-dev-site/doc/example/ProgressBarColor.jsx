import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ProgressBar from 'terra-progress-bar/lib/ProgressBar';

const ProgressBarColor = () => (
  <div>
    <ProgressBar valueText="5%" value={5} max={10} color="Orange" />
    <br />
    <br />
    <ProgressBar valueText="7.5%" value={7.5} max={10} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar valueText="10%" value={10} max={10} color="rgb(255, 0, 0)" />
  </div>
);

export default ProgressBarColor;
