import React from 'react';
import TimeInput from '../../../../TimeInput';

const TimeInputDefault = () => (
  <div style={{ caretColor: 'transparent' }}>
    <TimeInput
      id="timeInput"
      name="time-input"
      value="2:00"
    />
  </div>
);

export default TimeInputDefault;
