# Terra Spacer

This component is needed to provide a scalar spacing between various components and to help drive a unified spacing system.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-spacer`
  - `yarn add install terra-spacer`

## Usage

```jsx
import React from 'react';
import Spacer from 'terra-spacer';

// Default
<Spacer >
    ...
</Spacer>

// Small view ports
<Spacer marginTop="small" marginLeft="small-1" paddingTop="small-2">
  <Image src="someImageSource" alt="example image" />
<Spacer/>

// Medium view ports
<Spacer marginLeft="medium" marginRight="medium">
  <Image src="someImageSource" alt="example image" />
<Spacer/>

// Large and very large view ports
<Spacer paddingTop="large" paddingBottom="large+1" paddingLeft="large+2" marginLeft="large+4" marginRight="large+3">
  <Image src="someImageSource" alt="example image" />
<Spacer/>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
