# Terra Image

The terra-profile-image component displays an avatar image while the profile image is being loaded. If the profile image successfully loads, the avatar image is replaced with the profile image. Otherwise, the avatar image is left as is. All styling set on the profile image will be applied to the avatar image.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-image`
  - `yarn add terra-image`

## Usage

```jsx
import React from 'react';
import ProfileImage from 'terra-profile-image';
import Image from 'terra-image';

<ProfileImage 
  image={<Image src='https://path/to/image.jpg' variant="rounded" width="75" height="75" />} 
/>
```
