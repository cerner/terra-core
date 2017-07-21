# Terra Date Picker

Terra-date-picker is a controlled input component that provides users a way to enter or select a date from the date picker. terra-date-picker is essentially a wrapper for [react-datepicker][1] and leverages many of its props. One important difference between terra-date-picker and [react-datepicker][1] is that all of the date props in [react-datepicker][1] must be a [moment][2] object whereas the date props in terra-date-picker are ISO 8601 representation of the date.

This is a controlled component because it manages the state of the value in the input. Because this is a controlled input component, it cannot accept the defaultValue prop as it always uses the value prop. React does not allow having both the defaultValue and value props.

The [Modal][4] component by default will trap focus. In order to interact with the date picker when rendered inside a modal, the focus on the modal must be released so that the picker can then request focus. The [Modal Manager][3] component supports releasing focus on the modal. Therefore, to render the date picker in a modal, it must be composed via the [Modal Manager][3], which will internally handle releasing and requesting focus when the picker opens and closes.

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
  minDate={'2017-04-01'}
  maxDate={'2017-04-30'}
  excludeDates={['2017-04-10', '2017-04-20']}
  filterDate={isWeekday}
  name="admission-date"
/>

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

```

[1]: https://github.com/Hacker0x01/react-datepicker
[2]: http://momentjs.com/docs/
[3]: https://github.com/cerner/terra-core/tree/master/packages/terra-modal-manager/docs
[4]: https://github.com/cerner/terra-core/tree/master/packages/terra-modal/docs

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

