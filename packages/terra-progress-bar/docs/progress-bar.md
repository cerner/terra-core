# Terra Progress Bar

 The terra-progress-bar component provides users a way to display the progress of process or activity in a graphical manner. It can be modified in height and fill color. Its styling is set such that, the `ProgressBar` element will occupy full width of its parent element and will flex based on the width of the parent container.

 Note: The progress bar displays fill with respect to percentage (value between 0 and 100). If `max` isn't specified in the input to the component, then `value` corresponds to a percentage value.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-progress-bar`
  - `yarn install terra-progress-bar`
- [Download the latest version](https://github.com/cerner/terra-progress-bar/archive/master.zip)
- Clone the repo: `git clone https://github.com/cerner/terra-progress-bar.git`


## Usage
Some of the ways the ProgressBar React component can be used is as follows;
```
import ProgressBar from 'terra-progress-bar';

<ProgressBar
  height="tiny"
  value={3}
  max={10}
/>

<ProgressBar
  height="tiny"
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

## React Props
Prop         | Type           | Default         | Description
------------ | -------------- | --------------- | -----------
`height` | String | `small` | Sets the size of the progress-bar from the following values; `tiny`, `small`, `medium`, `large` and `huge`
`color` | String | `#007cc3` (default blue color) | CSS color indicator. It can be specified as `orange`, `#8ccc62` or `rgb(255, 0, 0)`
`value` | Number | | Sets the fill-value of the progress bar with respect to the `max` prop.
`max` | Number | 100 | Sets the maximum possible fill-value.
