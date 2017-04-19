import React from 'react';
import ProgressBar from 'terra-progress-bar';

const ProgressBarSize = () => (
  <div>
    <ProgressBar progressbarHeight="tiny" value={15} />
    <br />
    <br />
    <ProgressBar progressbarHeight="small" value={30} />
    <br />
    <br />
    <ProgressBar progressbarHeight="medium" value={45} />
    <br />
    <br />
    <ProgressBar progressbarHeight="large" value={60} />
    <br />
    <br />
    <ProgressBar progressbarHeight="huge" value={75} />
  </div>
);

export default ProgressBarSize;
