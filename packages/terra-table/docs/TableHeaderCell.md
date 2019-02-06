# Terra Table Header Cell

The Terra Table Header Cell is a sub component of the table header. The header cell dictates the minimum width of the column, but it can also dictate the maximum width of the column if a fixed or max-width value is set it. This results in the minimum width of the content also being the maximum width of the column.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-table`
  - `yarn add terra-table`

## Usage

```jsx
import React from 'react';
import { HeaderCell } from 'terra-table';


  <HeaderCell sort="asc" minWidth="small">
    Column 0
  </HeaderCell>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
