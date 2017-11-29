# Terra Spacer

This component is used to provide margin and/or padding space between two components based on the given values. This component uses **react-bps package mobile first strategy** for **responsiveness**. Find more information on how it is used [here](https://www.npmjs.com/package/react-bps).

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-spacer`
  - `yarn add install terra-spacer`

## Naming Convention

| Spacing scale values   | Computed REM Value |
| --------------------   | ------------------ |
| none                   | 0                  |
| small-2                | 0.2142857143rem    |
| small-1                | 0.3571428571rem    |
| small                  | 0.5rem             |
| medium                 | 0.7142857143rem    |
| large                  | 0.8571428571rem    |
| large+1                | 1.0714285714rem    |
| large+2                | 1.4285714286rem    |
| large+3                | 2.1428571429rem    |
| large+4                | 3.5714285714rem    |

## Usage

```jsx
import React from 'react';
import Spacer from 'terra-spacer';

// Small spacing

<Spacer marginTop="small" marginLeft="small-1" paddingTop="small-2">
  <Image src="someImageSource" alt="example image" />
<Spacer/>

// Medium spacing

<Spacer marginLeft="medium" marginRight="medium">
  <Image src="someImageSource" alt="example image" />
<Spacer/>

// Large and very large spacing

<Spacer paddingTop="large" paddingBottom="large+1" paddingLeft="large+2" marginLeft="large+4" marginRight="large+3">
  <Image src="someImageSource" alt="example image" />
<Spacer/>

// Responsive spacing

// sets margin-top to 50px for view port sizes >= 768px, for view port sizes < 768px sets margin-top to 5px

<Spacer marginTop="small-1" bps={{ 768: { marginTop: 'large+4' } }} >
  <Image src="someImageSource" alt="example image" />
</Spacer>
```


## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
