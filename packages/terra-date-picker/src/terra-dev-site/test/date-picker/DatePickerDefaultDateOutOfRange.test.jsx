import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

const DatePickerDefaultDateOutOfRange = () => (
  <DatePicker
    name="date-input"
    minDate={'2017-04-10'}
    maxDate={'2017-04-20'}
    selectedDate={'2017-04-01'}
  />
);

export default DatePickerDefaultDateOutOfRange;
