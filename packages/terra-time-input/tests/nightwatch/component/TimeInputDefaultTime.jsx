import React from 'react';
import moment from 'moment';
import TimeInput from '../../../lib/TimeInput';

const TimeInputDefault = () => (
  <div>
    <TimeInput
      defaultTime={moment('04/01/2016 12:00')}
    />
  </div>
);

export default TimeInputDefault;
