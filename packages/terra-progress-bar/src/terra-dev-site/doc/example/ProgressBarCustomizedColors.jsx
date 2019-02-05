import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ProgressBar from 'terra-progress-bar/lib/ProgressBar';
import './colors.css';

const ProgressBarGradient = () => (
  <div>
    <ProgressBar valueText="3%" value={3} max={10} colorClass="green-bar-grey-background-white-border" />
    <br />
    <br />
    <ProgressBar valueText="5%" value={5} max={10} colorClass="green-to-red-bar-blue-to-yellow-background-green-border" />
  </div>
);

export default ProgressBarGradient;
