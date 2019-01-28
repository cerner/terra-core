import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ProgressBar from 'terra-progress-bar/lib/ProgressBar';
import './colors.css';

const ProgressBarGradient = () => (
  <div>
    <ProgressBar valueText="3%" value={3} max={10} className="green-bar" hasGradient />
    <br />
    <br />
    <ProgressBar valueText="5%" value={5} max={10} className="orange-bar" hasGradient />
    <br />
    <br />
    <ProgressBar valueText="8%" value={8} max={10} className="blue-bar" hasGradient />
  </div>
);

export default ProgressBarGradient;
