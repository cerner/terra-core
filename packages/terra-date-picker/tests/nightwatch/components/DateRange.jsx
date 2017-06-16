import React from 'react';
import DateRange from '../../../lib/DateRange';

const DateRangeExample = () => (
  <DateRange
    startName="date-input-start"
    endName="date-input-end"
    startDate={'2017-04-01'}
    endDate={'2017-04-10'}
  />
);

export default DateRangeExample;
