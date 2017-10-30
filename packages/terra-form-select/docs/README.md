# Terra Form Select

The select component is a form input with a drop down list of options that allows for single selection.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-form-select`

## Usage

```jsx
import React from 'react';
import Select from 'terra-form-select';

<Select
  name="foo"
  defaultValue="b"
  required
>
  <Select.Option value="m" display="moo" key="m" />
  <Select.Option value="b" display="boo" key="b" disabled />
  <Select.Option value="z" display="zar" key="z" />
</Select>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
