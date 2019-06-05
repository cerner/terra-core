# Terra FlexTable

The Terra FlexTable is a structural component used to create standard html tables.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-flex-table`
  - `yarn add terra-flex-table`

## Usage

```jsx
import React from 'react';
import Table, { Row, Cell } from 'terra-flex-table';

<Table>
  <Row isSelectable key="row-0">
    <Cell key="row-0-cell-0">
      Table row text
    </Cell>
    <Cell key="row-0-cell-0">
      Table row text
    </Cell>
  </Row>
  <Row isSelectable key="row-1">
    <Cell key="row-1-cell-0">
      Table row text
    </Cell>
    <Cell key="row-1-cell-1">
      Table row text
    </Cell>
  </Row>
</Table>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
