import React from 'react';
import DatePicker from '../../../lib/DatePicker';

const DatePickerExcludeDates = () => (
  <DatePicker
    excludeDates={['04-01-2017T00:00:00.000Z', '04-03-2017T00:00:00.000Z']}
    selectedDate={'04-02-2017T00:00:00.000Z'}
  />
);

export default DatePickerExcludeDates;
