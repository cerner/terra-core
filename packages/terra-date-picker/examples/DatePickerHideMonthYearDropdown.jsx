import React from 'react';
import DatePicker from '../src/DatePicker';

const DatePickerHideMonthYearDropdown = () => (
  <div>
    <DatePicker
      showMonthDropdown={false}
      showYearDropdown={false}
    />
  </div>
);

export default DatePickerHideMonthYearDropdown;
