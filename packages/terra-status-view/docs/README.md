# Terra Status View

The status view component provides a customizable icon, message, and buttons in a view.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-status-view`
  - `yarn add terra-status-view`

## Usage

```jsx
import React from 'react';
import Button from 'terra-button';
import StatusView from 'terra-status-view';

<StatusView
  isAlignedTop={false}
  isGlyphHidden={false}
  variant={StatusView.Opts.variants.ERROR}
  title="A 500 error was thrown from the service."
  message=message="A null pointer exception was thrown."
>
  <Button text="OK" key="1 />
  <Button text="Cancel" key="2" />
</StatusView>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
