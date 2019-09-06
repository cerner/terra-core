# Row

The Row is a sub component that groups table cells passed through children. Each row handles it's own selection state through props. The onSelect function that can be passed to the row will return the metaData associated to the cell grid. The metaData allows for greater control of state with the ability to associate any indicator or function with the row.

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
