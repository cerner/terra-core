import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

const DatePickerExcludeDates = () => (
  <DatePicker
    name="date-input"
    excludeDates={['2017-04-01', '2017-04-03']}
    selectedDate="2017-04-02"
  />
);

export default DatePickerExcludeDates;
