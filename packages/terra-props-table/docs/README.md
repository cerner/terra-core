# Terra Props Table

React component to render a table view for the props metadata of another react component.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-props-table`
  - `yarn add terra-props-table`

## Usage

```jsx
import React from 'react';
import PropsTable from '../../terra-props-table/src/PropsTable';
import ComponentSrc from '!raw-loader!../src/Component.jsx';

<PropsTable id="props" src={ComponentSrc} />
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
