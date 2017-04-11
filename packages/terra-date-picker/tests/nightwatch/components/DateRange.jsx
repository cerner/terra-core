import React from 'react';
import moment from 'moment';
import DateRange from '../../../lib/DateRange';

const DateRangeExample = () => (
  <DateRange
    startDate={moment().add(1, 'days')}
    endDate={moment().add(7, 'days')}
  />
);

export default DateRangeExample;
