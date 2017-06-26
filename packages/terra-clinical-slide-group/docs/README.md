# Terra Clinical Slide Group

The SlideGroup is a Component that utilizes the `react-transition-group` library to present a stack of components in an
animated fashion.

The last component in the group is visible, and all others are hidden. While the hidden components are not visible and
marked with the `aria-hidden` attribute, they are not actually unmounted.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-slide-group`
  - `yarn add terra-clinical-slide-group`

## Usage

```jsx
import React from 'react';
import SlideGroup from 'terra-clinical-slide-group';

<SlideGroup
  items={[
    <div key="FIRST">First Component (I'm hidden)</div>,
    <div key="SECOND">Second Component (I'm hidden, too)</div>,
    <div key="THIRD">Third Component (I'm visible, because I'm the last component in the stack)</div>,
  ]}
  isAnimated
>
```
