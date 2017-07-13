import React from 'react';
import moment from 'moment';
import DatePicker from 'terra-date-picker';

const DatePickerExample = () => (
  <DatePicker
    name="date-input-default-date"
    selectedDate={moment().format()}
  />
);

export default DatePickerExample;
