import React from 'react';
import Base from 'terra-base';
import DatePicker from '../../../lib/DatePicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DatePickerDefaultDateOutOfRange = () => (
  <Base locale={locale}>
    <DatePicker
      name="date-input"
      minDate={'2017-04-10'}
      maxDate={'2017-04-20'}
      selectedDate={'2017-04-01'}
    />
  </Base>
);

export default DatePickerDefaultDateOutOfRange;
