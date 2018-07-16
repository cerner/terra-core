import React from 'react';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const DateTimePickerDefaultDateOutOfRange = () => (
  <DateTimePickerExampleTemplate
    minDateTime="2017-04-10T12:00"
    maxDateTime="2017-04-20T12:00"
    value="2017-04-01T12:00"
  />
);

export default DateTimePickerDefaultDateOutOfRange;
