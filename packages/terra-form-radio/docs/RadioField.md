# Terra Form Radio Field

RadioField is a component of terra-form-radio that provides a container for rendering related radio buttons. RadioField include displays for help text, error text, required or optional indication, and invalid states.


## Usage

```jsx
import React from 'react';
import Radio from 'terra-form-radio';
import RadioField from 'terra-form-radio/lib/RadioField';

<RadioField
  isInline
  isInvalid
  error="This is not a valid choice"
  help="One of these must be filled out"
>
  <Radio id="first-radio" labelText="First Radio" name="example" defaultChecked />
  <Radio id="second-radio" labelText="Second Radio" name="example" />
</RadioField>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
