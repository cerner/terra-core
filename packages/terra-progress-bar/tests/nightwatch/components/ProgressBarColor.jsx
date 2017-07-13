import React from 'react';
import ProgressBar from '../../../lib/ProgressBar';

const ProgressBarColor = () => (
  <div>
    <ProgressBar id="progressbarWithNamedColor" value={5} max={10} color="Orange" />
    <br />
    <br />
    <ProgressBar id="progressbarWithHexColor" value={7.5} max={10} color="#8ccc62" />
    <br />
    <br />
    <ProgressBar id="progressbarWithRGBColor" value={10} max={10} color="rgb(255, 0, 0)" />
  </div>
);

export default ProgressBarColor;
