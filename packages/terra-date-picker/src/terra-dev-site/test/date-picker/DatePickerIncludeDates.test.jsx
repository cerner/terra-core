import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

const DatePickerIncludeDates = () => (
  <DatePicker
    name="date-input"
    includeDates={['2017-04-01', '2017-04-02', '2017-04-03']}
  />
);

export default DatePickerIncludeDates;
