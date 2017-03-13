import React from 'react';
import moment from 'moment';
import DatePicker from '../../../lib/DatePicker';

const DatePickerOpenToDate = () => (
  <div>
    <DatePicker
      openToDate={moment('1999-09-09')}
    />
  </div>
);

export default DatePickerOpenToDate;
