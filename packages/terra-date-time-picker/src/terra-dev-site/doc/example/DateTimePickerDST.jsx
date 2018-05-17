import React from 'react';
import moment from 'moment';
import DateTimePickerExampleTemplate from './DateTimePickerExampleTemplate';

const DateTimePickerExample = () => (
  <DateTimePickerExampleTemplate
    value={moment().format()}
  />
);

export default DateTimePickerExample;
