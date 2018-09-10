import React from 'react';
import ProgressBar from '../../../ProgressBar';

const ProgressBarColor = () => (
  <div>
    <ProgressBar id="progressbarWithNamedColor" valueText="5%" value={5} max={10} color="Orange" />
    <br />
    <br />
    <ProgressBar id="progressbarWithHexColor" valueText="7.5%" value={7.5} max={10} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar id="progressbarWithRGBColor" valueText="10%" value={10} max={10} color="rgb(255, 0, 0)" />
  </div>
);

export default ProgressBarColor;
