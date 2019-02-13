# Terra Table Header

The Terra Table Header is a sub component passed to the table through Table's `header` prop, rather than children. The header provides the layout for header cells.

## Usage

```jsx
import React from 'react';
import { Header, HeaderCell } from 'terra-table';

<Header>
  <HeaderCell key="cell-0">
    Column 0
  </HeaderCell>
  <HeaderCell key="cell-1">
    Column 1
  </HeaderCell>
  <HeaderCell key="cell-2">
    Column 2
  </HeaderCell>
</Header>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
