import React from 'react';
import moment from 'moment';
import DatePicker from '../../../lib/DatePicker';

const DatePickerStartDate = () => (
  <DatePicker
    startDate={moment()}
  />
);

export default DatePickerStartDate;
