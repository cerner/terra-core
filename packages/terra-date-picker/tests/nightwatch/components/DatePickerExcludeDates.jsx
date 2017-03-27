import React from 'react';
import moment from 'moment';
import DatePicker from '../../../lib/DatePicker';

const DatePickerExcludeDates = () => (
  <div>
    <DatePicker
      excludeDates={[moment('04/01/2016'), moment('04/03/2016')]}
      startDate={moment('04/02/2016')}
    />
  </div>
);

export default DatePickerExcludeDates;
