# Input

Generic input which represents an HTML input element directly.

## Usage

```jsx
import React from 'react';
import Input from 'terra-form/lib/Input';

<Input
  name="foo"
  defaultValue="bar"
  required
/>

<Input
  name="foo"
  value="bar"
  onChange={this.updateFoo}
  required
  isInline
/>
```
