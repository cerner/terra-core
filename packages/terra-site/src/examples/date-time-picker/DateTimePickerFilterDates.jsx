import React from 'react';
import DateTimePickerExampleTemplate from './DateTimePickerExampleTemplate';

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

const DateTimePickerExample = () => (
  <DateTimePickerExampleTemplate filterDate={isWeekday} />
);

export default DateTimePickerExample;
