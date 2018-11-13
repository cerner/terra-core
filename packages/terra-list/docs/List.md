# Terra List

The Terra List is a structural component to vertically arrange content within list/listitems.

If a read-only list is desired, set the role prop for the list to null or 'none'. The default prop value for role is 'listbox', for read-only we want to disable this, so screen readers will not view it as containing actionable items.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-list`
  - `yarn add terra-list`

## Usage

```jsx
import React from 'react';
import List, { Item } from 'terra-list';

<List isDivided role="none">
  <Item key="section-1-item-1">
    <p>blurb</p>
  </Item>
  <Item key="section-1-item-2">
    <p>blurb</p>
  </Item>
</List>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
