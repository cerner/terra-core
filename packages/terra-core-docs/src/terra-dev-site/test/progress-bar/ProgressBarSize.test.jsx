import React from 'react';
import ProgressBar from 'terra-progress-bar';

const ProgressBarSize = () => (
  <div>
    <ProgressBar id="progressbarTiny" heightSize="tiny" value={15} />
    <br />
    <br />
    <ProgressBar id="progressbarSmall" heightSize="small" value={30} />
    <br />
    <br />
    <ProgressBar id="progressbarMedium" heightSize="medium" value={45} />
    <br />
    <br />
    <ProgressBar id="progressbarLarge" heightSize="large" value={60} />
    <br />
    <br />
    <ProgressBar id="progressbarHuge" heightSize="huge" value={75} />
  </div>
);

export default ProgressBarSize;
