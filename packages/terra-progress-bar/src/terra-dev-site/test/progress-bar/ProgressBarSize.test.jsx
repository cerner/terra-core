import React from 'react';
import ProgressBar from '../../../ProgressBar';

const ProgressBarSize = () => (
  <div>
    <ProgressBar id="progressbarTiny" heightSize="tiny" valueText="15%" value={15} />
    <br />
    <br />
    <ProgressBar id="progressbarSmall" heightSize="small" valueText="30%" value={30} />
    <br />
    <br />
    <ProgressBar id="progressbarMedium" heightSize="medium" valueText="45%" value={45} />
    <br />
    <br />
    <ProgressBar id="progressbarLarge" heightSize="large" valueText="60%" value={60} />
    <br />
    <br />
    <ProgressBar id="progressbarHuge" heightSize="huge" valueText="75%" value={75} />
  </div>
);

export default ProgressBarSize;
