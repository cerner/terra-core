import React from 'react';
import moment from 'moment';
import DatePickerExampleTemplate from './DatePickerExampleTemplate';

const DatePickerExample = () => (
  <DatePickerExampleTemplate selectedDate={moment().format()} />
);

export default DatePickerExample;
