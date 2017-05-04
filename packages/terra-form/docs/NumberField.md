# Number Field

Number field component for rendering text inputs with standard structured style defaulted to type=number. Also exposes attributes specific to that input type. Uses the input component.

## Usage

```jsx
import React from 'react';
import { NumberField } from 'terra-form';

<NumberField
  label="Sales Tax Rate"
  name="sales_tax_rate"
  value={0.075}
  error="This field is required"
  help="Your county's office may have this information"
  required={true}
  max={1}
  min={0}
  step={0.1}
  attrs={{ className: 'healtheintent-application' }}
  isInline={false}
/>
```
