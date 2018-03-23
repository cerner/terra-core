# Terra Action Header

The terra-action-header component is a header bar that contains sockets for placing actionable items such as buttons and hyperlinks.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-action-header`

## Usage

```jsx
import React from 'react';
import ActionHeader from 'terra-action-header';
import Button from 'terra-button';

<ActionHeader 
  title="Back Close Action Header" 
  onBack={() => alert('You clicked back!')} 
  onClose={() => alert('You clicked close!')} 
/>

<ActionHeader title="Custom Button Action Header" >
  <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
</ActionHeader>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
