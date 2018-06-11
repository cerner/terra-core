import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

const DatePickerDefaultDateExcluded = () => (
  <DatePicker
    name="date-input"
    excludeDates={['2017-04-03', '2017-04-04', '2017-04-05', '2017-04-06', '2017-04-07']}
    selectedDate={'2017-04-05'}
  />
);

export default DatePickerDefaultDateExcluded;
