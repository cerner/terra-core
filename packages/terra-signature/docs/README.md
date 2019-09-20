# Terra Signature

The terra-signature component provides users a way to define a signature with a series of line segments.
The component can define line width, line color, and optionally display a signature if the line segments have
already been recorded. Exiting the canvas then re-entering continues the drawing, as long as the pointer does not exit the confines of the browser. For mouse usage, only left click drawing is enabled.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-signature`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |



<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

```jsx
import React from 'react';
import Signature from 'terra-signature';

// Signature with line width
<Signature lineWidth={Signature.Opts.Width.FINE} />

// Signature with line width and simple intial signature line
<Signature
	lineWidth={Signature.Opts.Width.EXTRA_FINE}
	lineSegments={ [{ x1: 70, y1: 8, x2: 70, y2: 9 }, { x1: 70, y1: 9, x2: 70, y2: 10 }] }
/>

// Signature with with line width and cleared signature
<Signature lineWidth={Signature.Opts.Width.MEDIUM} lineSegments={ [] } />

// Signature with with line width and callback function
<Signature lineWidth={Signature.Opts.Width.HEAVY} onChange={this.handleChange.bind(this)} />
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
