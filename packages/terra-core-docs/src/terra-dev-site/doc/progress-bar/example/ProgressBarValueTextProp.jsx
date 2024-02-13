import React from 'react';
import ProgressBar from 'terra-progress-bar';

const ProgressBarValueTextProp = () => (
  <div>
    <ProgressBar ariaLabel="Supply progress" heightSize="medium" valueText="Completed 3 out of 5 Refills" value={3} max={5} />
  </div>
);

export default ProgressBarValueTextProp;
