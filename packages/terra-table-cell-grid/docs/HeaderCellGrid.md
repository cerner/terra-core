# Header Cell Grid

The HeaderCellGrid is a sub component that groups header cells passed through children. Each cell grid handles it's own selection state through props. Can be set to synchronize space with CellGrids using check mark or chevron style selection.

## Usage

```jsx
import React from 'react';
import { HeaderCellGrid, CellGrid } from 'terra-table-cell-grid';

  <HeaderCellGrid
    key="unique-react-key"
  >
    <CellGrid>
      Cell Content
    </CellGrid>
    <CellGrid>
      Cell Content
    </CellGrid>
  </HeaderCellGrid>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
