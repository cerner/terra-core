# Terra Time Input

The terra-time-input component is a controlled input component for entering time. It is a controlled component because it manages the state of the value in the input. Because this is a controlled input component, it cannot accept the defaultValue prop as it always uses the value prop. React does not allow having both the defaultValue and value props.

The currently supported time format is the 24-hour format (hh:mm). The time input enforces the entry that masks to the format. The hour input only accepts values between 00 and 23 and the minute input only accepts values between 00 and 59. For example, a time of 25:65 cannot be entered. Any times that are not in the format hh:mm will be ignored when initialized a terra-time-input component.

There are two types of clocks that are currently supported: A 12-hour clock and a 24-hour clock. This can be controlled through the `variant` prop on the component.

If a 24 hour clock is chosen, the hour displayed will be a value between 0 and 23 inclusively, and the minute displayed will be between 0 and 59 inclusively as well. A 0 will automatically be prepended to the hour if the entered hour is greater than 2. Likewise, a 0 will automatically be prepended to the minute if the entered minute is greater than 5. In addition, the inputs can be changed through the use of the up and down arrow keys on a non-mobile display.

If a 12 hour clock is chosen, the hour will be displayed between 01 and 12 inclusively, and an additional meridiem will be appended to the time input. The values of the meridiem are internationalized, meaning the time input will automatically initialize the post meridiem and ante meridiem for you. For the behavior of the hour input will inherit the behavior of the 24 hour clock with a few additions. Inputting 00 will automatically change the value to 12, and the hour input doesn't stop at 01 or 12. If the up or down arrows are pressed on the hour and the value goes over 12, it will automatically start at 01. Likewise, switching between 11 and 12 will update the value of the meridiem.

**Note:** Not all locales support a 12 hour clock. If a 12 hour clock is generated for a locale that doesn't have am and pm values, messages will not be generated for the am and pm values.

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

