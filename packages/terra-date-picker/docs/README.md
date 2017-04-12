# Terra Date Picker

The terra-date-picker component provides users a way to enter or select a date from the date picker.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-date-picker` 
  - `yarn add terra-date-picker` 

## Usage

```jsx
import React from 'react';
import DatePicker from 'terra-date-picker';

//Renders a date picker
<DatePicker
  minDate={moment()}
  maxDate={moment().add(30, 'days')}
  excludeDates={moment().add(1, 'days')}
  filterDate={isWeekday}
/>

//Renders a date range
<DateRange
  startDate={moment().add(1, 'days')}
  endDate={moment().add(7, 'days')}
/>

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

```
