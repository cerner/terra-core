import React from 'react';
import moment from 'moment';
import DatePicker from 'terra-date-picker';

const DatePickerExample = () => (
  <DatePicker
    name="date-input-min-max"
    minDate={moment().format()}
    maxDate={moment().add(6, 'days').format()}
  />
);

export default DatePickerExample;
