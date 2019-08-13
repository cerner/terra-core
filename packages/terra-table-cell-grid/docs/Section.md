# Section

The Terra TableCellGrid Section is a sub component that creates a section header based on the given props and groups the child rows beneath it. The section has the ability to toggle the display of its child cell grids given the isCollapsible and isCollapsed props. For a section to be collapsed both isCollapsible and isCollapsed must be true. Each section handles its collapsible and collapsed state.

## Usage

```jsx
import React from 'react';
import { CellGrid, Section } from 'terra-table-cell-grid';

  <Section
    key="unique-react-key"
    title="Section Title"
    isCollapsible
    isCollapsed
    metaData={{ myInfo: 'my-data' }}
    onSelect={this.handleSelection}
  >
    <CellGrid />
    <CellGrid />
    <CellGrid />
  </Section>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
