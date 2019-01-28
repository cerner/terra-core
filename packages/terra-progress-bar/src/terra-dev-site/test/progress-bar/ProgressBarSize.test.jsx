import React from 'react';
import ProgressBar from '../../../ProgressBar';
import '../../doc/example/colors.css';

const ProgressBarSize = () => (
  <div>
    <ProgressBar id="progressbarTiny" heightSize="tiny" valueText="15%" value={15} className="green-bar" />
    <br />
    <br />
    <ProgressBar id="progressbarSmall" heightSize="small" valueText="30%" value={30} className="green-bar" />
    <br />
    <br />
    <ProgressBar id="progressbarMedium" heightSize="medium" valueText="45%" value={45} className="green-bar" />
    <br />
    <br />
    <ProgressBar id="progressbarLarge" heightSize="large" valueText="60%" value={60} className="green-bar" />
    <br />
    <br />
    <ProgressBar id="progressbarHuge" heightSize="huge" valueText="75%" value={75} className="green-bar" />
  </div>
);

export default ProgressBarSize;
