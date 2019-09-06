# Header Cell

The Terra Table Header Cell is a sub component of the table header.

While sort indicators are presented by the header cell, the actual sorting logic needs to be handled by the consumer by implementing the `onSelect` and `metaData` props.

## Usage

```jsx
import React from 'react';
import { HeaderCell } from 'terra-table';

<HeaderCell sort="asc">
  Column 0
</HeaderCell>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
