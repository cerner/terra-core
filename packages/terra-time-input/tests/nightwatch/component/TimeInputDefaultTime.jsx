import React from 'react';
import TimeInput from '../../../lib/TimeInput';

const handleOnChange = (event, time) => {
  window.console.log('**handleOnChange** Input value:', event.target.value, ' Updated time:', time);
};

const TimeInputDefault = () => (
  <TimeInput
    value={'12:00'}
    onChange={handleOnChange}
  />
);

export default TimeInputDefault;
