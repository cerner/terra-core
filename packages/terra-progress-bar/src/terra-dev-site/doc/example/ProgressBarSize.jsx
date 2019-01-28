import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ProgressBar from 'terra-progress-bar/lib/ProgressBar';
import './colors.css';

const ProgressBarSize = () => (
  <div>
    <ProgressBar heightSize="tiny" valueText="15%" value={15} className="green-bar" />
    <br />
    <br />
    <ProgressBar heightSize="small" valueText="30%" value={30} className="green-bar" />
    <br />
    <br />
    <ProgressBar heightSize="medium" valueText="45%" value={45} className="green-bar" />
    <br />
    <br />
    <ProgressBar heightSize="large" valueText="60%" value={60} className="green-bar" />
    <br />
    <br />
    <ProgressBar heightSize="huge" valueText="75%" value={75} className="green-bar" />
  </div>
);

export default ProgressBarSize;
