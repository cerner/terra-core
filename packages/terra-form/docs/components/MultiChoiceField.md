# Multi Choice Field

Choice field component for rendering checkbox inputs in standard field structure.

## Usage

```jsx
import React from 'react';
import { MultiChoicefield } from 'terra-form';

<MultiChoicefield
  label='Select the programming languages you have experience with'
  name="language_experience"
  error="This field is required"
  help="Note: All checked languages should have at least 3 months experience"
  required={true}
  choices=[{ name: 'C', value: 'C' }, { name: 'java', value: 'Java' }]
  isInline={false}
  required={false}
/>
```
