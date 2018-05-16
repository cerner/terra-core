import React from 'react';
import Base from 'terra-base';
import DatePicker from '../../../lib/DatePicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DatePickerMinMax = () => (
  <Base locale={locale}>
    <DatePicker
      name="date-input"
      minDate={'2017-04-01'}
      maxDate={'2017-04-10'}
    />
  </Base>
);

export default DatePickerMinMax;
