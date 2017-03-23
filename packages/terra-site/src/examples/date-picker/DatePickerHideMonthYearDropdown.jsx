import React from 'react';
import DatePicker from 'terra-date-picker';

const DatePickerHideMonthYearDropdown = () => (
  <div>
    <DatePicker
      showMonthDropdown={false}
      showYearDropdown={false}
    />
  </div>
);

export default DatePickerHideMonthYearDropdown;
