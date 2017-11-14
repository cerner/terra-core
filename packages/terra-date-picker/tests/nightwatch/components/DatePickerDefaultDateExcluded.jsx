import React from 'react';
import Base from 'terra-base';
import DatePicker from '../../../lib/DatePicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DatePickerDefaultDateExcluded = () => (
  <Base locale={locale}>
    <DatePicker
      name="date-input"
      excludeDates={['2017-04-03', '2017-04-04', '2017-04-05', '2017-04-06', '2017-04-07']}
      selectedDate={'2017-04-05'}
    />
  </Base>
);

export default DatePickerDefaultDateExcluded;
