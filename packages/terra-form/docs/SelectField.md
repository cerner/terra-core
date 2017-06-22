# Select Field

Select Field component for rendering selects with standard structured style. Uses the select component. Also exposes attributes specific to the select.

## Usage

```jsx
import React from 'react';
import SelectField from 'terra-form/lib/SelectField';

<SelectField
  choices={['moo', 'boo', 'bar']}
  error="This field is required"
  name="description"
  label="Description"
  selectAttrs={{ className: 'healtheintent-application' }}
  defaultValue="bar"
  required
/>
```
