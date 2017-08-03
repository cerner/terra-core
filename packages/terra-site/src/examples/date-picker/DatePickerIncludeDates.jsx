import React from 'react';
import moment from 'moment';
import DatePickerExampleTemplate from './DatePickerExampleTemplate';

const DatePickerExample = () => (
  <DatePickerExampleTemplate
    includeDates={[moment().format(), moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
  />
);


export default DatePickerExample;
