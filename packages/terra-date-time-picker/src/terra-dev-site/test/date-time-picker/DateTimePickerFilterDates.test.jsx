import React from 'react';
import DateTimePickerExampleTemplate from '../../common/DateTimePickerExampleTemplate';

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

const DateTimePickerExample = () => (
  <DateTimePickerExampleTemplate
    filterDate={isWeekday}
    value="2017-08-15"
  />
);

export default DateTimePickerExample;
