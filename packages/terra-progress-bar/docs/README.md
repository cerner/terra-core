# Terra Progress Bar

The progress bar component provides users a way to display the progress of process or activity in a graphical manner. It can be modified in height and fill color. Its styling is set such that, the `ProgressBar` element will occupy full width of its parent element and will flex based on the width of the parent container.

Note: The progress bar displays fill with respect to percentage (value between 0 and 100). If `max` isn't specified in the input to the component, then `value` corresponds to a percentage value.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-progress-bar`
  - `yarn add terra-progress-bar`

## Usage

```jsx
import React from 'react';
import ProgressBar from 'terra-progress-bar';

<ProgressBar
  heightSize="tiny"
  value={3}
  max={10}
  color="#8ccc62"
/>

<ProgressBar
  heightSize="tiny"
  value={40}
  color="Orange"
/>

<ProgressBar
  value={60}
  color="#8ccc62"
/>

<ProgressBar
  value={10}
  max={10}
  color="rgb(255, 0, 0)"
/>
```
