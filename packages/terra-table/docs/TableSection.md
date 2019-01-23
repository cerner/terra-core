# Terra Table Section

The Terra Table Section is a sub component that creates a section header based on the given props and groups the child rows beneath it. The section header has the ability to toggle the display of its child rows given the isCollapsible and isCollapsed props. For a section to be collapsed both isCollapsible and isCollapsed. Each section handles its collapsible and collapsed state.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-table`
  - `yarn add terra-table`

## Usage

```jsx
import React from 'react';
import { Row, Section } from 'terra-table';

  <Section
    key="unique-react-key"
    isCollapsible
    isCollapsed
    metaData={{ myInfo: 'my-data' }}
    onSelect={this.handleSelection}
    colSpan={3}
  >
    <Row />
    <Row />
    <Row />
  </Section>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
