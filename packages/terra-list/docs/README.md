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

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
