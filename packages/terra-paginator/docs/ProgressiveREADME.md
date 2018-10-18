# Terra Progressive Paginator

Paginator to be used for ordered data where the size of the data is known. Provides first, last, previous, next, and paged functionality.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-paginator`

## Usage

```jsx
import React from 'react';
import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';

<ProgressivePaginator onPageChange={i => console.log(i)} selectedPage={1} totalCount={2234} itemCountPerPage={20} />
```

## Component Features

* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
