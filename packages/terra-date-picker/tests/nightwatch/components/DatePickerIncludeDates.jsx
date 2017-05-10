import React from 'react';
import DatePicker from '../../../lib/DatePicker';

const DatePickerIncludeDates = () => (
  <DatePicker
    includeDates={['04-01-2017T00:00:00.000Z', '04-02-2017T00:00:00.000Z', '04-03-2017T00:00:00.000Z']}
  />
);

export default DatePickerIncludeDates;
