import React from 'react';
import moment from 'moment';
import DateRange from 'terra-date-picker/lib/DateRange';

const DatePickerRange = () => (
  <div>
    <DateRange
      startDate={moment().add(1, 'days')}
      endDate={moment().add(7, 'days')}
    />
  </div>
);

export default DatePickerRange;
