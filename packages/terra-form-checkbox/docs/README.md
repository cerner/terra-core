# Terra Form Checkbox

The Terra Form Checkbox is a responsive input component rendered as a box next to label text. When activated, a check mark shall appear. Focus can be activated through tabbing and the checked state can be toggled with the space bar.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-form-checkbox`

## Implementation Notes:
The Form-Checkbox component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings. These translation strings are used for the default form-checkbox title when the application does not specify a title for the form-checkbox.

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs

## Usage

```jsx
import React from 'react';
import Checkbox from 'terra-form-checkbox';

<Checkbox id="checkbox" labelText="Default Checkbox" />
```

## Component Features
 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
