import React from 'react';
import DatePicker from '../../../../lib/DatePicker';

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

const DatePickerFilterDates = () => (
  <DatePicker
    name="date-input"
    filterDate={isWeekday}
  />
);

export default DatePickerFilterDates;
