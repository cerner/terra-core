# Terra Visually Hidden Text

Visually Hidden Text is text designed for screen readers that should not be visible to the UI. Some components such as badge will have a visual indication to note their hierarchy on the page, but that indication is lost when a screen reader is used on the web page. Visually Hidden text would allow your application to provide that additional context to a screen reader.

Another reason for this component is when you want to produce more semantic markup for a screen reader only experience. On a screen reader, you may to provide a visually hidden header to allow for better readability. You also may need to provide different instructions for visual users vs non visual users. Finally, div's have a difficult understanding the aria-label attributes as well. In these instances, it's recommend to use visually hidden text.

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

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
