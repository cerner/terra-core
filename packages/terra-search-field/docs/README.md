# Terra Search Field

A search component with a field that automatically performs a search callback after user input.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-search-field`

## Implementation Notes:

The Searach-Field component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs

## Usage

```jsx
import React from 'react';
import SearchField from 'terra-search-field';

// Search Field with placeholder
<SearchField placeholder="Search" />

// Search Field with callback function and delay
<SearchField searchDelay={500} onSearch={(searchText) => { console.log(searchText); }} />

// Search Field with callback function and minimum search text length
<SearchField minimumSearchTextLength={5} onSearch={(searchText) => { console.log(searchText); }} />

```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
