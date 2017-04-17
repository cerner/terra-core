import React from 'react';
import moment from 'moment';
import DatePicker from '../../../lib/DatePicker';

const DatePickerDefault = () => (
  <DatePicker
    startDate={moment('04/01/2016')}
  />
);

export default DatePickerDefault;
