# Fieldset

Generic form fieldset component which handles the layout of a standard form fieldset including errors, help text, legend, value and widget placement.

## Usage

```jsx
import React from 'react';
import Fieldset from 'terra-form/lib/Fieldset';

<Fieldset
  legend="Do you have any Children?"
  error="This field is required"
  help="Families are eligible for family package plans"
  required
  isInline
 >
   {this.props.children}
</Fieldset>
```
