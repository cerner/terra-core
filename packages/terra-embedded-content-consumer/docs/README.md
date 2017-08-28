# Terra Embedded Content Consumer

The Embedded Content Consumer is the application component which is embedding web content within it.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-embedded-content-consumer`
  - `yarn add terra-embedded-content-consumer`

## Usage

```jsx
import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';

<EmbeddedContentConsumer
  src="https://google.com"
  onLaunch={() => { console.log('launched'); }}
  onAuthorize={() => { console.log('Authorized'); }}
  options={{ secret: 'SecretKey', resizeConfig: { scrolling: true }}}
  eventHandlers=[{ key: 'customEvent', handler: () => { console.log('Custom event invoked.'); } }]
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)