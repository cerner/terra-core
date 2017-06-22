# Control

A Control represents a radio or checkbox widget with a label. Uses the Input component.

## Usage

```jsx
import React from 'react';
import Control from 'terra-form/lib/Control';

<Control
  type="checkbox"
  defaultChecked={false}
  id="form-checkbox"
  inputAttrs={{ className: 'healtheintent-checkbox' }}
  labelText="Do you have any Children?"
  labelTextAttrs={{ className: 'healtheintent-control-label-text' }}
  name="children_present"
  onChange={() => {}}
  value="children_present"
  isInline
 />
```
