import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

const DatePickerMinMax = () => (
  <DatePicker
    name="date-input"
    minDate="2017-04-01"
    maxDate="2017-04-10"
  />
);

export default DatePickerMinMax;
