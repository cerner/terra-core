# Terra Form Select Field

A convenience wrapper assembling a [terra-form-select](https://github.com/cerner/terra-core/tree/master/packages/terra-form-select) within a [terra-form-field](https://github.com/cerner/terra-core/tree/master/packages/terra-form-field).

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-form-select/lib/SelectField`

## Usage

```jsx
import React from 'react';
import SelectField from 'terra-form-select/lib/SelectField';

<SelectField defaultValue="red" selectId="select-id" label="Select a color">
  <SelectField.Option value="red" display="Red" key="red" />
  <SelectField.Option value="blue" display="Blue" key="blue" />
  <SelectField.Option value="green" display="Green" key="green" />
</SelectField>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
