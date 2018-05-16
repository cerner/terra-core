import React from 'react';
import Base from 'terra-base';
import DatePicker from '../../../lib/DatePicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DatePickerExcludeDates = () => (
  <Base locale={locale}>
    <DatePicker
      name="date-input"
      excludeDates={['2017-04-01', '2017-04-03']}
      selectedDate={'2017-04-02'}
    />
  </Base>
);

export default DatePickerExcludeDates;
