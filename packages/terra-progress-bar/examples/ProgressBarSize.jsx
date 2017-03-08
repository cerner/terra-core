import React from 'react';
import ProgressBar from '../src/ProgressBar';

const ProgressBarSize = () => (
  <div>
    <ProgressBar height="tiny" value={15} />
    <br />
    <br />
    <ProgressBar height="small" value={30} />
    <br />
    <br />
    <ProgressBar height="medium" value={45} />
    <br />
    <br />
    <ProgressBar height="large" value={60} />
    <br />
    <br />
    <ProgressBar height="huge" value={75} />
  </div>
);

export default ProgressBarSize;
