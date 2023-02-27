import React, { useState } from 'react';
import ProgressBar from 'terra-progress-bar';
import Button from 'terra-button';

const ProgressBarDefault = () => {
  const [val, setVal] = useState(10);
  let intervalId; let
    curVal;
  curVal = 10;

  const updateProgress = () => {
    setVal((_val) => {
      curVal = _val + 10;
      return _val + 10;
    });

    if (curVal === 100) {
      clearInterval(intervalId);
    }
  };

  const start = () => {
    intervalId = setInterval(updateProgress, 2000);
  };

  return (
    <div>
      <label>{`Progress bar: ${val}%`}</label>
      <ProgressBar id="progressbar" value={val} valueText={`Progress is ${val}%`} />
      <br />
      <Button text="Start" onClick={start} />
            &nbsp;
      <Button text="Reset" onClick={() => { setVal(10); }} />
    </div>
  );
};

export default ProgressBarDefault;
