import React from 'react';
import moment from 'moment';
import DatePicker from 'terra-date-picker';

const DatePickerStartDate = () => (
  <div>
    <DatePicker
      startDate={moment()}
    />
  </div>
);

export default DatePickerStartDate;
