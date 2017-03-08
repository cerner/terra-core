import React from 'react';
import moment from 'moment';
import DatePicker from '../src/DatePicker';

const DatePickerIncludeDates = () => (
  <div>
    <DatePicker
      includeDates={[moment(), moment().subtract(1, 'days'), moment().add(1, 'days')]}
    />
  </div>
);

export default DatePickerIncludeDates;
