import React from 'react';
import Base from 'terra-base';
import DatePicker from '../../../lib/DatePicker';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const DatePickerDisabledDate = () => (
  <Base locale={locale}>
    <DatePicker
      name="date-input"
      selectedDate={'2017-04-01'}
      disabled
    />
  </Base>
);

const DatePickerReadonlyDate = () => (
  <Base locale={locale}>
    <DatePicker
      name="date-input"
      selectedDate={'2017-04-01'}
      inputAttributes={{ readOnly: true }}
    />
  </Base>
);

export {
  DatePickerDisabledDate,
  DatePickerReadonlyDate,
};
