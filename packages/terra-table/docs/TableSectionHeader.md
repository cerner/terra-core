# Terra Table SectionHeader

The Terra Section Header is built upon a table row and can be placed similarly within a table, provided the number of columns are provided to the SectionHeader.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-table`
  - `yarn add terra-table`

## Usage

```jsx
import React from 'react';
import { SectionHeader } from 'terra-table';

<SectionHeader
  key="unique-react-key"
  isCollapsible
  isCollapsed
  metaData={{ myInfo: 'my-data' }}
  onSelect={this.handleSelection}
  colSpan={3}
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
