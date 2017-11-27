# Terra Dynamic Grid

The DynamicGrid component provides users a way to dynamically configure a CSS Grid using
configuration. The component supports defining custom regions across multiple responsive breakpoints.

**NOTE:** Only shorthand syntax is supported. The DynamicGrid is not a 1-to-1 mirror of the CSS Grid API due to supporting legacy IE.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-dynamic-grid`

## Usage

```jsx
import React from 'react';
import DynamicGrid from 'terra-dynamic-grid';
import Region from 'terra-dynamic-grid/Region';

const template = {
  'grid-template-columns': '1fr 1fr',
  'grid-template-rows': 'auto',
  'grid-gap': '10px',
};

const region1 = {
  'grid-column-start': 1,
  'grid-row-start': 1,
};

const region2 = {
  'grid-column-start': 2,
  'grid-row-start': 1,
};

<DynamicGrid defaultTemplate={template} >
  <Region defaultPosition={region1}>Region 1</Region>
  <Region defaultPosition={region2}>Region 2</Region>
</DynamicGrid>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
