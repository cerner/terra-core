# Terra Form Field

The Form Field component handles the layout of the label, help text and error text associated with a form element. Additionally, it provides required, optional, and invalid indicators.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-form-field`

## Implementation Notes:
The Form-Field component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings. These translation strings are used for the default form-field title when the application does not specify a title for the form-field.

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs

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

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
