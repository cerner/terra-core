# Choice Field

Choice field component for rendering radio inputs in standard field structure.

## Usage

```jsx
import React from 'react';
import { ChoiceField } from 'terra-form';

<ChoiceField
  label="What State do you live in?"
  name="children_present"
  value="children_present"
  error="This field is required"
  help="State Locations help determine what campus to place you at"
  required={true}
  attrs={{ className: 'healtheintent-application' }}
  choices={[{ name: 'Kansas', value: 'ks' }, { name: 'Missouri', value: 'MO' }]}
  isInline={false}
 />
```
