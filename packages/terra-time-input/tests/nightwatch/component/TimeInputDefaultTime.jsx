import React from 'react';
import TimeInput from '../../../lib/TimeInput';

const handleOnChange = (event, time) => {
  window.console.log('**handleOnChange** Input value:', event.target.value, ' Updated time:', time);
};

const TimeInputDefault = () => (
  <TimeInput
    id="timeInput"
    name="time-input"
    value={'12:00'}
    onChange={handleOnChange}
  />
);

export default TimeInputDefault;
