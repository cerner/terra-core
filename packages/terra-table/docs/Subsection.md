# Subsection

The Terra Table Subsection is a sub component that creates a subsection header based on the given props and groups the child cell grids beneath it. The subsection header has the ability to toggle the display of its child rows given the isCollapsible and isCollapsed props. For a subsection to be collapsed both isCollapsible and isCollapsed must be true. Each section handles its collapsible and collapsed state.

## Usage

```jsx
import React from 'react';
import { CellGrid, Subsection } from 'terra-table';

  <Subsection
    key="unique-react-key"
    title="Subsection Title"
    isCollapsible
    isCollapsed
    metaData={{ myInfo: 'my-data' }}
    onSelect={this.handleRowSelection}
  >
    <Row />
    <Row />
    <Row />
  </Subsection>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
