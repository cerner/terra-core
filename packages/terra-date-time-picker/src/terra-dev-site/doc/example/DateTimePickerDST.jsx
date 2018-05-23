import React from 'react';
import moment from 'moment';
import DateTimePickerExampleTemplate from '../common/DateTimePickerExampleTemplate';

const DateTimePickerExample = () => (
  <DateTimePickerExampleTemplate
    value={moment().format()}
  />
);

export default DateTimePickerExample;
