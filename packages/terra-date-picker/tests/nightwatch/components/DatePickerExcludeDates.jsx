import React from 'react';
import DatePicker from '../../../lib/DatePicker';

const DatePickerExcludeDates = () => (
  <DatePicker
    excludeDates={['2017-04-01T00:00Z', '2017-04-03T00:00Z']}
    selectedDate={'2017-04-02T00:00Z'}
  />
);

export default DatePickerExcludeDates;
