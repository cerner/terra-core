import React from 'react';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerDefaultDateExcluded = () => (
  <DateTimePickerExampleTemplate
    excludeDates={['2017-04-03T12:00', '2017-04-04T12:00', '2017-04-05T12:00']}
    value="2017-04-03T12:00"
  />
);

export default DateTimePickerDefaultDateExcluded;
