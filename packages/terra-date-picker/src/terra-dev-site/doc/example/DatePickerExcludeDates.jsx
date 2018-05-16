import React from 'react';
import moment from 'moment';
import DatePickerExampleTemplate from '../common/DatePickerExampleTemplate';

const DatePickerExample = () => (
  <DatePickerExampleTemplate
    excludeDates={[moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
  />
);


export default DatePickerExample;
