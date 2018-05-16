import React from 'react';
import Base from 'terra-base';
import DatePicker from '../../../lib/DatePicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DatePickerDefault = () => (
  <Base locale={locale}>
    <DatePicker
      name="date-input"
    />
  </Base>
);

export default DatePickerDefault;
