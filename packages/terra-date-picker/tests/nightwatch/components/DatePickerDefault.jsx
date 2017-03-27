import React from 'react';
import moment from 'moment';
import DatePicker from '../../../lib/DatePicker';

const DatePickerDefault = () => (
  <div>
    <DatePicker
      startDate={moment('04/01/2016')}
    />
  </div>
);

export default DatePickerDefault;
