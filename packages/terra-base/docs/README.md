# Terra Base

The base component receives customized translation messages from the application and passes translations into I18nProvider wrapper and sets minimal global styles for an application.
Global styles include CSS to help normalize box-sizing, reset margins/paddings, and define global font styles.

**Note: This component should be imported before the other terra components in your app.** This is to help ensure that these styles are defined at the beginning of the [extracted stylesheet](https://github.com/webpack-contrib/extract-text-webpack-plugin) and are inherited down to the other terra components.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-base`
  - `yarn add terra-base`

## Usage

```jsx
import React from 'react';
import Base from 'terra-base';

<Base>
  ...
</Base>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
* [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
