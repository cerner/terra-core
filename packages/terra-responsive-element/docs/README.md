# Terra Responsive Element

The ResponsiveElement conditionally renders components based on viewport size.
The viewport can be set to the immediate parent or window.

## Additional Notes:

It is not necessary to set each breakpoint. If a breakpoint is not set the component will look at each successive smaller breakpoint until one is found.

The ResponsiveElement observes the available width. Meaning padding, borders, and margins set on the parent are not included in the calculation. Modifying box-sizing will impact how these properties are used in an elements width calculation. For more details see: https://css-tricks.com/almanac/properties/b/box-sizing/

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-responsive-element`
  - `yarn add terra-responsive-element`

## Usage

```jsx
import React from 'react';
import ResponsiveElement from 'terra-responsive-element';

const defaultElement = <div>Default</div>;
const large = <div>Large</div>;

<ResponsiveElement defaultElement={defaultElement} large={large} />
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

