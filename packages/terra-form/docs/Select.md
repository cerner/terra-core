# Select

Generic select component which represents an HTML select element directly.

## Usage

```jsx
import React from 'react';
import Select from 'terra-form/lib/Select';

<Select
  options={[{ value: 'm', display: 'moo' },
            { value: 'b', display: 'boo', disabled: true },
            { value: 'z', display: 'zar' }]}
  name="foo"
  defaultValue="b"
  required
/>
```
