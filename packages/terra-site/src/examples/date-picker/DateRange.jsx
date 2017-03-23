import React from 'react';
import moment from 'moment';
import DatePicker from 'terra-date-picker';

const DateRangeExample = () => (
  <div>
    <DateRange
      startDate={moment().add(1, 'days')}
      endDate={moment().add(7, 'days')}
    />
  </div>
);

export default DateRangeExample;
