# Terra List

The Terra List is a structural component to arrange content within list/listitems.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-list`
  - `yarn add terra-list`

## Usage

```jsx
import React from 'react';
import List from 'terra-list';

<List.Item
  content={<h1 blurb />}
  isSelected={true}
  isSelectable={true}
  hasChevron={false}
/>

<List isDivided={true}>
  <List.Item content={<h1 blurb />} />
  <List.Item content={<h1 blurb />} />
</List>
```

Terra also provides two variations for the list component.
* [Selectable List](https://github.com/cerner/terra-core/tree/master/packages/terra-list/docs/Selectable.md)

* [Single Select List](https://github.com/cerner/terra-core/tree/master/packages/terra-list/docs/SingleSelect.md)

* [Multi Select List](https://github.com/cerner/terra-core/tree/master/packages/terra-list/docs/MultiSelect.md)


## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
