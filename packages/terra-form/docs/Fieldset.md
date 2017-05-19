# Fieldset

Generic form fieldset component which handles the layout of a standard form fieldset including errors, help text, label, value and widget placement.

## Usage

```jsx
import React from 'react';
import Fieldset from 'terra-form/lib/Fieldset';

<Fieldset
  type="checkbox"
  legend="Do you have any Children?"
  name="children_present"
  value="children_present"
  error="This field is required"
  help="Families are eligible for family package plans"
  required
  isInline
 >
   {this.props.children}
</Fieldset>
```
