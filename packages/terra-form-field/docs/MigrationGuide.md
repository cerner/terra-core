# Migrating from terra-form's Field Component to terra-form-field

The following sections describe how to migrate from the Field component provided in the terra-form package to the Field component provided in the terra-form-field package. Terra-form-field provides enhanced API and layout to begin the first phase of the OSC uplift.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-form-field`

## Prop Changes
#### Props Added
- `errorIcon` - icon to indicates the Field is invalid.
- `hideRequired` - indicates a Field is required, but hides the required indicator.
- `isInvalid` - indicates whether or not a field is valid or invalid.
- `isLabelHidden` - indicates whether or not the label is visible.
- `showOptional` - indicates a Field is optional.

#### Props Changed
- `label` - optional --> required.

## Behavior Changes
#### Added/Changed Behavior
- `isInvalid` - when true, the provided error icon and error text will show. Previously, the error text would alway show when provided.
- `hideRequired` - when used, the required indicator is hidden, but when `isInvalid`, the required indicated will show.
- `showOptional` - when used, the label '(optional)' is appended to the provide label text.
- `isLabelHidden` - when used, the label is created on the DOM for accessibility, but the label is not visible.

## Code Migration
#### Migrating from terra-form/lib/Field to terra-form-field:
```diff
  import React from 'react';
- import Field from 'terra-form/lib/Field';
+ import Field from 'terra-form-field';

  <Field
    label="Field Label"
    labelAttrs={{ className: 'field-label' }}
    error="This field is required"
    help="This is a required field"
+   isInvalid={this.state.isInvalid}  // Needed to display error icon and error text
    isInline
    required
   >
   // A control component
  </Field>
```

## Prop Tables

### Terra-form/lib/Field v1.12.0
| Prop Name |	Type | Is Required | Default Value | Description |
|-----------|------|-------------|---------------|-------------|
| children  | node | optional    | null	         | The control component the field should wrap. |
| error	    | node | optional    | null	         | Error message to display when the input is invalid. |
| help      | node | optional    | null	         | Help message to display with the input. |
| htmlFor   | string | optional  | undefined     | The htmlFor attributes on the field label. |
| isInline  | bool | optional    | false         | Whether or not the field is an inline field. |
| label     | node | optional    | null	         | Label of the input. |
| labelAttrs| object | optional  | {}            | Attributes to attach to the label. |
| required  | bool  | optional   | false         | Whether or not the field is required. |

### Terra-form-field v1.0.0
| Prop Name |	Type | Is Required | Default Value | Description |
|-----------|------|-------------|---------------|-------------|
| children    | node   | optional | null	       | The control component the field should wrap. |
| error	      | node   | optional | null	       | Error message to display when the input is invalid. |
| errorIcon	  | element| optional | IconError    | Error Icon to display when the input is invalid. |
| help        | node   | optional | null	       | Help message to display with the input. |
| hideRequired| bool   | optional | false	       | Whether or not to hide the required indicator on the label. |
| htmlFor     | string | optional | undefined    | The htmlFor attributes on the field label. |
| isInvalid   | bool   | optional | false        | Whether or not the field is invalid. |
| isInline    | bool   | optional | false        | Whether or not the field is an inline field. |
| label       | node   | **required** | null	       | Label of the input. |
| labelAttrs  | object | optional | {}           | Attributes to attach to the label. |
| required    | bool   | optional | false        | Whether or not the field is required. |
| showOptional| bool   | optional | false        | Whether or not to append the 'optional' label to a non-required field label. |
