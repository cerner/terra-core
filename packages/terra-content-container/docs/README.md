# Terra ContentContainer Documentation

The Terra ContentContainer is a structural component for the purpose of arranging content with a header.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-content-container`
  - `yarn add terra-content-container`

## Usage

```jsx
import React from 'react';
import ContentContainer from 'terra-content-container';

<ContentContainer header={[<h1 blurb />} fill>
  {container}
</ContentContainer>
```
## React Props

The *ContentContainer* React component will have the following API:
||Prop||Type||Description||
|`header`|node|The content to be placed in the header area of the container.|
|`children`|node|The children content to be placed in the container.|
|`fill`|Bool|Should the container fill it's parent container.|
