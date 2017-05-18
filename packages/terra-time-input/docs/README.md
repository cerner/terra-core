# Terra Time Input

The terra-time-input component is an input for entering time. During time entry it uses [text-mask](https://github.com/text-mask/text-mask) to mask the input value to conform to the time format.

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
