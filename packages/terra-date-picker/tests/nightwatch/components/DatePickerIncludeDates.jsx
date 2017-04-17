import React from 'react';
import moment from 'moment';
import DatePicker from '../../../lib/DatePicker';

const DatePickerIncludeDates = () => (
  <DatePicker
    includeDates={[moment(), moment().subtract(1, 'days'), moment().add(1, 'days')]}
  />
);

export default DatePickerIncludeDates;
