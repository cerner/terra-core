# Terra Visually Hidden Text

Visually Hidden Text is a component designed for screen readers that renders text on the dom, but is not visible to the UI. Some components such as badge will have a visual indication to note their hierarchy on the page, but that indication is lost when a screen reader is used on the web page. Visually Hidden text would allow your application to provide that additional context to a screen reader.

Another reason for this component is when you want to produce more semantic markup for a screen reader only experience. Some various examples include:

- You may want to provide a visually hidden header to allow for better readability.
- You may need to provide different instructions for visual users vs non visual users.
- div nodes have a difficult understanding the aria-label attributes as well.

In these instances, it's recommended to use visually hidden text.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-visually-hidden-text`

## Usage

```jsx
import React from 'react';
import VisuallyHiddenText from 'terra-visually-hidden-text';

<VisuallyHiddenText text="Press Escape to close this window" {props...} />
```

## Component Features

 * [Cross-Browser Support](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/features)
