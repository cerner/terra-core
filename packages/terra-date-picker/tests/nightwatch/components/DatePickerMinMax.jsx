import React from 'react';
import moment from 'moment';
import DatePicker from '../../../lib/DatePicker';

const DatePickerMinMax = () => (
  <div>
    <DatePicker
      minDate={moment()}
      maxDate={moment().add(6, 'days')}
    />
  </div>
);

export default DatePickerMinMax;
