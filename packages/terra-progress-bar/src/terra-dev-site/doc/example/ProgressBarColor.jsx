import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ProgressBar from 'terra-progress-bar/lib/ProgressBar';
import './colors.css';

const ProgressBarColor = () => (
  <div>
    <ProgressBar valueText="5%" value={5} max={10} colorClass="color-bar-example-1" />
    <br />
    <br />
    <ProgressBar valueText="7.5%" value={7.5} max={10} colorClass="color-bar-example-2" />
    <br />
    <br />
    <ProgressBar valueText="10%" value={10} max={10} colorClass="color-bar-example-3" />
  </div>
);

export default ProgressBarColor;
