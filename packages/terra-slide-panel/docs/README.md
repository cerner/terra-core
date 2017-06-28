# Terra Slide Panel

The Terra SlidePanel component is a progressive disclosure mechanism that allows additional content to be shown and hidden in a variety of ways.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-slide-panel`
  - `yarn add terra-slide-panel`

## Usage

```jsx
import React from 'react';
import SlidePanel from 'terra-slide-panel';

<SlidePanel
  mainContent={<h1>Main Content</h1>}
  panelContent={<h1>Panel Content</h1>}
  panelBehavior="overlay"
  panelPosition="end"
  panelSize="small"
  isOpen
  isFullscreen
  fill
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

