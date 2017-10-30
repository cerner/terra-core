# Terra Form Field

The Form Field component handles the layout of a standard form field. It handles label, help text, error text and widget placement, as well as provides required and invalid indicators.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-form-field`

## Usage

```jsx
import React from 'react';
import Field from 'terra-form-field';

<Field
  label="Do you have any Children?"
  labelAttrs={{ className: 'healtheintent-application' }}
  error="This field is required"
  help="Families are eligible for family package plans"
  required
  isInvalid={this.state.isInvalid}
 >
   {this.props.children}
</Field>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
