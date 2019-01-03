# Terra Table Subsection

The Terra Table Subsection is a sub component that groups child rows beneath a subsection header. The subsection header has the ability to toggle the display of its child rows. Each subsection handles its collapsible and collapsed state.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-table`
  - `yarn add terra-table`

## Usage

```jsx
import React from 'react';
import { Row, Subsection } from 'terra-table';

  <Subsection
    key="unique-react-key"
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
