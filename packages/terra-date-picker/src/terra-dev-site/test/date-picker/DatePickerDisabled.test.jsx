import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

const DatePickerDisabledDate = () => (
  <DatePicker
    name="date-input"
    selectedDate="2017-04-01"
    disabled
  />
);

export default DatePickerDisabledDate;
