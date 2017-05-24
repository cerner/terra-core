# Terra Overlay

The Terra Overlay component is a component that displays an overlay relative to the container that triggered the overlay. This component blocks interactions and fades out all elements of the triggering container.

A Loading Overlay is a subcomponent that displays an overlay with a spinner icon and loading message.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-overlay`

## Usage

# Overlay
```jsx
import React from 'react';
import Overlay from 'terra-clinical-overlay';

<Overlay>
  <Icon />
  <a href="www.terra-clinical.com/home-page" > Home Page </a>
  <a href="www.terra-clinical.com/documentation" > Documentation </a>
</Overlay>
```

# LoadingOverlay
```jsx
import React from 'react';
import Overlay.LoadingOverlay from 'terra-clinical-overlay';

<LoadingOverlay
  message="Loading..."
/>
```
