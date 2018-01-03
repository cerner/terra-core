# Terra Content Container

The Terra ContentContainer is a structural component for the purpose of arranging content with an optional header and/or footer.

The footer is not responsive to mobile keyboard positioning.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-content-container`
  - `yarn add terra-content-container`

## Usage

```jsx
import React from 'react';
import ContentContainer from 'terra-content-container';

<ContentContainer header={<h1 blurb />} footer={<h1 blurb />} fill>
  {container}
</ContentContainer>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
