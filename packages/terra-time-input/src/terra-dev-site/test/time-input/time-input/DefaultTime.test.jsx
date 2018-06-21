import React from 'react';
import TimeInput from '../../../../TimeInput';

const TimeInputDefault = () => (
  <div style={{ 'caret-color': 'transparent' }}>
    <TimeInput
      id="timeInput"
      name="time-input"
      value="12:00"
    />
  </div>
);

export default TimeInputDefault;
