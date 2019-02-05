import React from 'react';
import ProgressBar from '../../../ProgressBar';
import '../../doc/example/colors.css';

const ProgressBarColor = () => (
  <div>
    <ProgressBar id="progressbarWithNamedColor" valueText="5%" value={5} max={10} colorClass="orange-bar" />
    <br />
    <br />
    <ProgressBar id="progressbarWithHexColor" valueText="7.5%" value={7.5} max={10} colorClass="green-bar" />
    <br />
    <br />
    <ProgressBar id="progressbarWithRGBColor" valueText="10%" value={10} max={10} colorClass="red-bar" />
  </div>
);

export default ProgressBarColor;
