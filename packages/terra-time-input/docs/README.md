# Terra Time Input

The terra-time-input component is an input for entering time. The currently supported time format is the 24-hour format (hh:mm). The time input enforces the entry that masks to the format. The hour input only accepts values between 00 and 23 and the time input only accepts values between 00 and 59. For example, a time of 25:65 cannot be entered.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-time-input`
  - `yarn add terra-time-input`

## Usage

```jsx
import React from 'react';
import TimeInput from 'terra-time-input';

<TimeInput 
  value={'12:30'}
  onChange={this.handleChange}
/>
```
