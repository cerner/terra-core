# Terra Image

The terra-profile-image component displays an avatar image while the profile image is being loaded. If the profile image successfully loads, the avatar image is replaced with the profile image. Otherwise, the avatar image is left as is. All styling set on the profile image will be applied to the avatar image.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-profile-image`
  - `yarn add terra-profile-image`

## Usage

```jsx
import React from 'react';
import ProfileImage from 'terra-profile-image';

<ProfileImage 
  src='https://path/to/image.jpg' width="75" height="75" />} 
/>
```
