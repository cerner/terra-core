import React from 'react';
import Base from 'terra-base';
import DatePicker from '../../../lib/DatePicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

const DatePickerFilterDates = () => (
  <Base locale={locale}>
    <DatePicker
      name="date-input"
      filterDate={isWeekday}
    />
  </Base>
);

export default DatePickerFilterDates;
