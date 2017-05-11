# Text Field

Text field component for rendering text inputs with standard structured style. Uses the Input component.

## Usage

```jsx
import React from 'react';
import { TextField } from 'terra-form';

<TextField
  type="email"
  label="Email Address"
  name="email"
  value=""
  error="This field is required"
  help="This will not be shared with outside sources"
  required={true}
  attrs={{className: 'healtheintent-application'}}
  minLength={8}
  maxLength={75}
 />
```
