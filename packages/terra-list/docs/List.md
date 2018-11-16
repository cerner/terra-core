# Terra List

The Terra List is a structural component to vertically arrange content within list/list items.

If a list implementation contains selectable list options the role prop should be set to "listbox" for accesibility. 

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-list`
  - `yarn add terra-list`
s
## Usage

```jsx
import React from 'react';
import List, { Item } from 'terra-list';

<List isDivided role="listbox">
  <Item isSelectable key="section-1-item-1">
    <p>blurb</p>
  </Item>
  <Item isSelectable key="section-1-item-2">
    <p>blurb</p>
  </Item>
</List>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
