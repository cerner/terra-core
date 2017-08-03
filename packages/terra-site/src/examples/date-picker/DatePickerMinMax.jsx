import React from 'react';
import moment from 'moment';
import DatePickerExampleTemplate from './DatePickerExampleTemplate';

const DatePickerExample = () => (
  <DatePickerExampleTemplate
    minDate={moment().format()}
    maxDate={moment().add(6, 'days').format()}
  />
);

export default DatePickerExample;
