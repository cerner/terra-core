import React from 'react';
import ProgressBar from '../../../lib/ProgressBar';

const ProgressBarSize = () => (
  <div>
    <ProgressBar id="progressbarTiny" heightSize="tiny" value={15} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar id="progressbarSmall" heightSize="small" value={30} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar id="progressbarMedium" heightSize="medium" value={45} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar id="progressbarLarge" heightSize="large" value={60} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar id="progressbarHuge" heightSize="huge" value={75} color="#8ccc62" />
  </div>
);

export default ProgressBarSize;
