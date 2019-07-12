# Terra Spacer

This component is used to provide margin and/or padding space between two components based on the given values.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-spacer`
  - `yarn add install terra-spacer`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

<details>
<summary>View information on this component's peer dependencies.</summary>

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

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

// Shorthand consumption

<Spacer padding="large" margin="medium large+1 tiny">
  <Image src="someImageSource" alt="example image" />
</Spacer>

<Spacer padding="large small" margin="medium large+1 tiny">
  <Image src="someImageSource" alt="example image" />
</Spacer>

<Spacer padding="large medium small" margin="medium large+1 tiny">
  <Image src="someImageSource" alt="example image" />
</Spacer>

<Spacer padding="large none large+1 large+2" margin="none large+3 none large+4">
  <Image src="someImageSource" alt="example image" />
<Spacer/>

```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
