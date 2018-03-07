# Terra Section Header

Section Header presentational component that provides an onClick callback.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-section-header`

## Usage

```jsx
import React from 'react';
import SectionHeader from 'terra-section-header';

<SectionHeader
  title="Section Header Example"
  level={1}
  onClick={() => {
    // eslint-disable-next-line no-alert
    window.alert('The Section Header has been clicked!');
  }}
  isOpen={true}
/>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
 
<!-- Uncomment supported features.
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 -->
