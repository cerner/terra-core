import React from 'react';
import moment from 'moment';
import DatePicker from 'terra-date-picker';

const DatePickerExample = () => (
  <DatePicker
    name="date-input-include"
    includeDates={[moment().format(), moment().subtract(1, 'days').format(), moment().add(1, 'days').format()]}
  />
);

export default DatePickerExample;
