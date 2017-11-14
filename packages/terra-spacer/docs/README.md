# Terra Spacer

This component is used to provide margin and/or padding space between two components based on the given values.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-spacer`
  - `yarn add install terra-spacer`

## Naming Convention

| String Name   | Computed PX Value |
| ------------- | -------------     |
| none          | 0px               |
| small-2       | 3px               |
| small-1       | 5px               |
| small         | 7px               |
| medium        | 10px              |
| large         | 12px              |
| large+1       | 15px              |
| large+2       | 20px              |
| large+3       | 30px              |
| large+4       | 50px              |

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

// Responsive spacing

// sets magin-top to 50px for view port sizes >= 768px, for view port sizes < 768px sets margin-top to 5px

<Spacer marginTop="small-1" bps={{ 768: { marginTop: 'large+4' } }} >
    ...
</Spacer>
```

## Note

This component uses ** react-bps package ** for ** responsiveness **. Find more information on how it is used [here](https://www.npmjs.com/package/react-bps).


## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
