# Avatar

The `Avatar` variant represents a person - it displays an image or initials in a circular frame. If neither are provided, a fallback user icon displays. The size scales based on its consuming component's `font-size`. To override this, utilize the `height` and `width` props.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-avatar`

## Usage

```jsx
import React from 'react';
import { Avatar } from 'terra-avatar';

<Avatar
  alt="patient"
  initials="DY"
/>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
