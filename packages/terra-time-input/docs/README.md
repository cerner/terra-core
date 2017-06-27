# Terra Time Input

The terra-time-input component is a controlled input component for entering time. It is a controlled component because it manages the state of the value in the input. Because this is a controlled input component, it cannot accept the defaultValue prop as it always uses the value prop. React does not allow having both the defaultValue and value props.

The currently supported time format is the 24-hour format (hh:mm). The time input enforces the entry that masks to the format. The hour input only accepts values between 00 and 23 and the minute input only accepts values between 00 and 59. For example, a time of 25:65 cannot be entered. A 0 will automatically be prepended to the hour if the entered hour is greater than 2. Likewise, a 0 will automatically be prepended to the minute if the entered minute is greater than 5.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-time-input`
  - `yarn add terra-time-input`

## Usage

```jsx
import React from 'react';
import TimeInput from 'terra-time-input';

<TimeInput
  name="admission-time"
  value={'12:30'}
  onChange={this.handleChange}
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

