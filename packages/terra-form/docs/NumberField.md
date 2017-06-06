# Number Field

Number Field component for rendering numeric inputs (inputs with type=number) with standard structured style. Uses the Input element. Also exposes attributes specific to the input.

## Usage

```jsx
import React from 'react';
import NumberField from 'terra-form/lib/NumberField';

<NumberField
  label="Sales Tax Rate"
  name="sales_tax_rate"
  value={0.075}
  error="This field is required"
  help="Your county's office may have this information"
  max={1}
  min={0}
  step={0.1}
  inputAttrs={{ className: 'healtheintent-application' }}
  isInline
  required
/>
```
