# Textarea Field

Textarea Field component for rendering textareas with standard structured style. Uses the Textarea component.
Also exposes attributes specific to the textarea.

## Usage

```jsx
import React from 'react';
import TextareaField from 'terra-form/lib/TextareaField';

<TextareaField
  name="description"
  label="Description"
  labelAttrs={{ className: 'healtheintent-application' }}
  error="This field is required"
  cols={20}
  rows={10}
  value="I'm a software engineer working at Cerner"
  inputAttrs={{ className: 'healtheintent-application' }}
  required
 />
```
