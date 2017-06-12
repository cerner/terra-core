# Text Field

Text Field component for rendering text inputs with standard structured style. Uses the Input component. Also exposes attributes specific to the input.

## Usage

```jsx
import React from 'react';
import TextField from 'terra-form/lib/TextField';

<TextField
  type="email"
  label="Email Address"
  name="email"
  value=""
  error="This field is required"
  help="This will not be shared with outside sources"
  inputAttrs={{ className: 'healtheintent-application' }}
  minLength={8}
  maxLength={75}
  required
 />
```
