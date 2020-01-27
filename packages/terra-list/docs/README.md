# Terra List

The Terra List is a structural component to vertically arrange content within list/list items.

If a list implementation contains selectable list options the role prop should be set to "listbox" for accesibility.

Two padding variants are provide for list item content, standard and compact. If different padding is desired use the defaulted style of 'none' and set the padding on the list item's child content with your own css values, preferrably themeable variables.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-list`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |



<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

```jsx
import React from 'react';
import List, { Item } from 'terra-list';

<List
  dividerStyle="standard"
  paddingStyle="standard"
  role="listbox"
>
  <Item isSelectable key="section-1-item-1">
    <p>List item text</p>
  </Item>
  <Item isSelectable key="section-1-item-2">
    <p>List item text</p>
  </Item>
</List>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
