# Control

A control represents a radio or checkbox widget with a label. Uses the Input component.

## Usage

```jsx
import React from 'react';
import { Control } from 'terra-form';

<Control
  type="checkbox"
  label="Do you have any Children?"
  name="children_present"
  value="children_present"
  error="This field is required"
  help="Families are eligible for family package"
  required={true}
  attrs={{ className: 'healtheintent-application' }}
  isInline={false}
 />
```
