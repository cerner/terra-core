import React from 'react';
import DatePicker from 'terra-date-picker';

const handleOnChange = (event, selectedDate) => {
  window.console.log('**handleOnChange** The selected date is: ', selectedDate);
};

const DatePickerOnChange = () => (
  <DatePicker
    name="date-input-onchange"
    onChange={handleOnChange}
  />
);

export default DatePickerOnChange;
