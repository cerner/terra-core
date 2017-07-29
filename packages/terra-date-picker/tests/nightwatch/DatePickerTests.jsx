/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const DatePickerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/date-picker-tests/default">DatePicker - Default</Link></li>
      <li><Link to="/tests/date-picker-tests/exclude-dates">DatePicker - Exclude Dates</Link></li>
      <li><Link to="/tests/date-picker-tests/filter-dates">DatePicker - Filter Dates</Link></li>
      <li><Link to="/tests/date-picker-tests/include-dates">DatePicker - Include Dates</Link></li>
      <li><Link to="/tests/date-picker-tests/min-max">DatePicker - Min Max</Link></li>
      <li><Link to="/tests/date-picker-tests/on-change">DatePicker - On Change</Link></li>
      <li><Link to="/tests/date-picker-tests/start-date">DatePicker - Start Date</Link></li>
      <li><Link to="/tests/date-picker-tests/inside-modal">DatePicker - Presented Inside Modal</Link></li>
    </ul>
  </div>
);

export default DatePickerTests;
