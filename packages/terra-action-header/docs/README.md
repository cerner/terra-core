# Terra Action Header

The terra-action-header component is a header bar containing a title and optional actionable items such as links and buttons.

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

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
