import React from 'react';
import DatePicker from '../../../lib/DatePicker';

const handleOnChange = (selectedDate) => {
  window.console.log('**handleOnChange** The selected date is: ', selectedDate);
};

const DatePickerOnChange = () => (
  <DatePicker
    name="date-input"
    onChange={handleOnChange}
  />
);

export default DatePickerOnChange;
