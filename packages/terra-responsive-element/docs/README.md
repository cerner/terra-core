# Terra Responsive Element

The ResponsiveElement conditionally renders components based on viewport size.
The viewport can be set to the immediate parent or window.

*Note: It is not necessary to set each breakpoint. If a breakpoint is not set the component will look at each successive smaller breakpoint until one is found.*

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
