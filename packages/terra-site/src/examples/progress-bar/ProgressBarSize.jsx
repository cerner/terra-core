import React from 'react';
import ProgressBar from 'terra-progress-bar';

const ProgressBarSize = () => (
  <div>
    <ProgressBar heightSize="tiny" value={15} />
    <br />
    <br />
    <ProgressBar heightSize="small" value={30} />
    <br />
    <br />
    <ProgressBar heightSize="medium" value={45} />
    <br />
    <br />
    <ProgressBar heightSize="large" value={60} />
    <br />
    <br />
    <ProgressBar heightSize="huge" value={75} />
  </div>
);

export default ProgressBarSize;
