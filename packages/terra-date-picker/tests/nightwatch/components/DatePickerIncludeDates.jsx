import React from 'react';
import Base from 'terra-base';
import DatePicker from '../../../lib/DatePicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DatePickerIncludeDates = () => (
  <Base locale={locale}>
    <DatePicker
      name="date-input"
      includeDates={['2017-04-01', '2017-04-02', '2017-04-03']}
    />
  </Base>
);

export default DatePickerIncludeDates;
