# Terra Table Row

The Terra Table Row is a sub component that groups child cells. Each row handles it's own selection state through props. The onSelect function that can be passed to the table row will return the metaData associated to the row. The metaData allows for greater control of state with the ability associate any indicator or function with the row.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-table`
  - `yarn add terra-table`

## Usage

```jsx
import React from 'react';
import { Row, Cell } from 'terra-table';

  <Row
    key="unique-react-key"
    isSelectable
    isSelected
    metaData={{ myInfo: 'my-data' }}
    onSelect={this.handleRowSelection}
  >
    <Cell>
      Cell Content
    </Cell>
    <Cell>
      Cell Content
    </Cell>
  </Row>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
