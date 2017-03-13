import React from 'react';
import moment from 'moment';
import DatePicker from '../../../lib/DatePicker';

const DatePickerStartDate = () => (
  <div>
    <DatePicker
      startDate={moment()}
    />
  </div>
);

export default DatePickerStartDate;
