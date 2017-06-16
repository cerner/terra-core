# Control

A Control represents a radio or checkbox widget with a label. Uses the Input component.

## Usage

```jsx
import React from 'react';
import Control from 'terra-form/lib/Control';

<Control
  type="checkbox"
  labelText="Do you have any Children?"
  labelAttrs={{ className: 'healtheintent-application' }}
  name="children_present"
  value="children_present"
  error="This field is required"
  help="Families are eligible for family package"
  required={true}
  textAttrs={{ className: 'healtheintent-control-label' }}
  isInline={false}
 />
```
