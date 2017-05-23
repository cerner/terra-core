import React from 'react';
import ProgressBar from 'terra-progress-bar';

const ProgressBarSize = () => (
  <div>
    <ProgressBar heightSize="tiny" value={15} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar heightSize="small" value={30} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar heightSize="medium" value={45} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar heightSize="large" value={60} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar heightSize="huge" value={75} color="#8ccc62" />
  </div>
);

export default ProgressBarSize;
