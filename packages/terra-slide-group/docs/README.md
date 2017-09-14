# Terra Slide Group

The SlideGroup is a utility component that utilizes the `react-transition-group` library to present a stack of components in an
animated fashion.

The last component in the group is visible, and all others are hidden. While the hidden components are not visible and
marked with the `aria-hidden` attribute, they are not actually unmounted.

As a utility component, any component utilizing the SlideGroup will need to handle the keyboard accessibility of the content on each slide. 

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-slide-group`
  - `yarn add terra-slide-group`

## Usage

```jsx
import React from 'react';
import SlideGroup from 'terra-slide-group';

<SlideGroup
  items={[
    <div key="FIRST">First Component (I'm hidden)</div>,
    <div key="SECOND">Second Component (I'm hidden, too)</div>,
    <div key="THIRD">Third Component (I'm visible, because I'm the last component in the stack)</div>,
  ]}
  isAnimated
>
```
