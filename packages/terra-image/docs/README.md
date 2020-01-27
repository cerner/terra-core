# Terra Image

The terra-image component provides styling for visual imagery.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-image`

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
import Image from 'terra-image';

import placeholderSrc from './mock/valid/path/placeholder.png';
import invalidImageSrc from './mock/invalid/path/image.png';
import validImageSrc from './mock/valid/path/image.png';

const placeholderNode = (<img src={placeholderSrc} alt="placeholder image" />);

// Providing an invalid or unresolvable path with cause the placeholder node to be displayed.
<Image src={invalidImageSrc} placeholder={placeholderNode} alt="invalid image" />

// Providing a valid path will cause the src image to be displayed.
<Image src={validImageSrc} placeholder={placeholderNode} alt="valid image" />
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
