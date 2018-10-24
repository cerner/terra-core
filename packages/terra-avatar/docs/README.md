# Terra Avatar

The terra-avatar component displays an avatar, which can be either an image or text, in a circular frame. If neither an image or text is provided, a variant-based fallback icon is used.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-avatar`

## Usage

```jsx
import React from 'react';
import Avatar from 'terra-avatar';

<Avatar
  image="https://path/to/image.jpg"
  alt="placeholder"
  ariaLabel="John Doe"
  variant="user"
/>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
