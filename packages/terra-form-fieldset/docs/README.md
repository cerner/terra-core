# Terra Form Fieldset

Generic form fieldset component which handles the layout of a standard form fieldset including help text, legend, value and widget placement.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-form-fieldset`

## Usage

```jsx
import React from 'react';
import Fieldset from 'terra-form-fieldset/lib/Fieldset';

<Fieldset
  legend="Do you have any Children?"
  legendAttrs={{ className: 'healtheintent-application' }}
  help="Families are eligible for family package plans"
  required
  isInline
 >
   {this.props.children}
</Fieldset>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
