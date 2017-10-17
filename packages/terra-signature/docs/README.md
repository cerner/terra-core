# Terra Signature

The terra-signature component provides users a way to define a signature with a series of line segments.
The component can define line width, line color and optionally display a signature if the line segments have 
already been recorded.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-signature`

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
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
