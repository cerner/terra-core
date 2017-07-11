# Select

Generic select component which represents an HTML select element directly.

## Usage

```jsx
import React from 'react';
import Select from 'terra-form/lib/Select';

<Select
  choices={[ { value: 'm', display: 'moo' },
             { value: 'b', display: 'boo' },
             { value: 'z', display: 'zar' } ]}
  name="foo"
  defaultValue="bar"
  required
/>
```
