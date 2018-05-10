# Radio Field

RadioField is a component of terra-form-radio that provides a container for rendering related radio buttons. RadioField include displays for help text, error text, required or optional indication, and invalid states.


## Usage

```jsx
import React from 'react';
import Radio from 'terra-form-radio';
import RadioField from 'terra-form-radio/lib/RadioFieldSrc';

<RadioField
  isInline
  isInvalid
  error="This is not a valid choice"
  help="One of these must be filled out"
>
  <Radio id="first-radio" labelText="First Radio" name="example" defaultChecked />
  <Radio id="second-radio" labelText="Second Radio" name="example" />
</RadioField>
```

## Component Features

Uncomment supported features.
 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
