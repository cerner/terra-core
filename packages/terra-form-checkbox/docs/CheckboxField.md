# Terra Form Checkbox Field

CheckboxField is a component of terra-form-checkbox that provides a container for rendering related checkboxes. CheckboxField include displays for help text, error text, required or optional indication, and invalid states.


## Usage

```jsx
import React from 'react';
import Checkbox from 'terra-form-checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';

<CheckboxField
  isInline
  isInvalid
  error="This is not a valid choice"
  help="One of these must be filled out"
>
  <Checkbox id="first-checkbox" labelText="First Checkbox" name="example" defaultChecked />
  <Checkbox id="second-checkbox" labelText="Second Checkbox" name="example" />
</CheckboxField>
```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
