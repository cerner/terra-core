# Terra Dynamic Grid

The DynamicGrid component provides users a way to dynamically configure a CSS Grid using
configuration. The component supports defining custom regions across multiple responsive breakpoints.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-dynamic-grid`

## Usage

```jsx
import React from 'react';
import DynamicGrid from 'terra-dynamic-grid';
import Region from 'terra-dynamic-grid/Region';

const layouts = [{
  'grid-template-columns': '100px 100px',
  'grid-template-rows': 'auto',
  'grid-gap': '10px',
  regions: [
    {
      name: 'r1',
      'grid-column-start': 1,
      'grid-row-start': 1,
    },
    {
      name: 'r2',
      'grid-column-start': 2,
      'grid-row-start': 1,
    },
  ],
}];


<DynamicGrid layouts={layouts} >
  <Region name="r1">Region 1</Region>
  <Region name="r2">Region 2</Region>
</DynamicGrid>
```

## Component Features

<!-- Uncomment supported features.
 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
 -->
