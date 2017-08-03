import React from 'react';
import DatePickerExampleTemplate from './DatePickerExampleTemplate';

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

const DatePickerExample = () => (
  <DatePickerExampleTemplate filterDate={isWeekday} />
);

export default DatePickerExample;
