import React from 'react';
import moment from 'moment';
import DatePicker from 'terra-date-picker';

const DatePickerOpenToDate = () => (
  <div>
    <DatePicker
      openToDate={moment('1999-09-09')}
    />
  </div>
);

export default DatePickerOpenToDate;
