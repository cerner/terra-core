# Field

Generic form field component which handles the layout of a standard form field including errors, help text, label, value and widget placement.

## Usage

```jsx
import React from 'react';
import { Field } from 'terra-form';

<Field
  type="checkbox"
  label="Do you have any Children?"
  name="children_present"
  value="children_present"
  error="This field is required"
  help="Families are eligible for family package plans"
  required={true}
  attrs={{ className: 'healtheintent-application' }}
  isInline={false}
 >
   {this.props.children}
</Field>
```
