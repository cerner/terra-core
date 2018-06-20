import React from 'react';
import TimeInput from '../../../../TimeInput';

const TimeInputDefault = () => (
  <div style={{ 'caret-color': 'transparent' }}>
    <TimeInput
      id="timeInput"
      name="time-input"
      value="09:22"
      variant="12-hour"
      disabled
    />
  </div>
);

export default TimeInputDefault;
