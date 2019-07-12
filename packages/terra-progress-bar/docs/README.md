# Terra Progress Bar

The progress bar component provides users a way to display the progress of process or activity in a graphical manner. It can be modified in height and fill color. Its styling is set such that, the `ProgressBar` element will occupy full width of its parent element and will flex based on the width of the parent container.

Note: The progress bar displays fill with respect to percentage (value between 0 and 100). If `max` isn't specified in the input to the component, then `value` corresponds to a percentage value.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-progress-bar`
  - `yarn add terra-progress-bar`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

<details>
<summary>View information on this component's peer dependencies.</summary>

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |
| terra-markdown | ^2.20.0 |


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

```jsx
import React from 'react';
import ProgressBar from 'terra-progress-bar';

<ProgressBar
  heightSize="tiny"
  value={3}
  max={10}
  colorClass="green-bar"
/>

<ProgressBar
  heightSize="tiny"
  value={40}
  colorClass="orange-bar"
/>

<ProgressBar
  value={60}
/>

<ProgressBar
  value={10}
  max={10}
  colorClass="red-bar"
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
