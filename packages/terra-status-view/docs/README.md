# Terra Status View

Renders an icon, title, message, and buttons.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-status-view`
  - `yarn add terra-status-view`

## Usage

```jsx
import React from 'react';
import StatusView from 'terra-status-view';

const buttons = [
  {
    id: 'ok',
    key: 1,
    text: 'OK',
    size: 'medium',
    onClick: handleOnAction1,
  }, {
    id: 'cancel',
    key: 2,
    text: 'Cancel,
    size: 'medium',
    onClick: handeOnAction2,
  },
];

<StatusView
  isAlignedTop={false}
  isGlyphHidden={false}
  variant="error"
  title="A 500 error was thrown from the service."
  message=message="A null pointer exception was thrown."
  buttonAttrs={buttons}
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
