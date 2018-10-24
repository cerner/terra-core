# Terra Time Input

The terra-time-input component is a controlled input component for entering time. It is a controlled component because it manages the state of the value in the input. Because this is a controlled input component, it cannot accept the defaultValue prop as it always uses the value prop. React does not allow having both the defaultValue and value props.

The currently supported time format is the 24-hour format (hh:mm). The time input enforces the entry that masks to the format. The hour input only accepts values between 00 and 23 and the minute input only accepts values between 00 and 59. For example, a time of 25:65 cannot be entered. Time values provided to the component when it is initialized which are not in the format of hh:mm will be ignored

There are two types of clocks that are currently supported: A 12-hour clock and a 24-hour clock. This can be controlled through the `variant` prop on the component.

If a 24 hour clock is chosen, the hour displayed will be a value between 0 and 23 inclusively, and the minute displayed will be between 0 and 59 inclusively as well. When a single key is pressed on the hour input, a 0 will automatically be prepended to the hour if the entered hour is greater than 2. Likewise, a 0 will automatically be prepended to the minute if the inputed key value is greater than 5. In addition, the inputs can be changed through the use of the up and down arrow keys on a non-mobile display.

If a 12 hour clock is chosen, the hour will be displayed between 01 and 12 inclusively, and an additional meridiem will be appended to the time input. The values of the meridiem are internationalized, meaning the time input will automatically initialize the post meridiem and ante meridiem for you. For the behavior of the hour input will inherit the behavior of the 24 hour clock with a few additions. Inputting 00 will automatically change the value to 12 for both meridiems. The up and down arrow keys have new additions as well. If up is pressed and the hour is 12, it will be set to 01. If the hour is 12 and down is pressed, the meridiem will be switched in addition to decrementing the hour to 11.

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
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
