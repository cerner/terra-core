# Migrating from terra-form

The following sections describe how to migrate from the select provided in the terra-form package to the terra-form-select package.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-form-select`


## Props Changes

Terra Forms Select has switched from using props to supply options to using an Options component that can be supplied to the select as children.

#### Props removed
- `choices`
- `options`

#### Props added
- `children`
- `disabled`
- `isInvalid`

#### terra-form Usage Example
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

#### terra-form-select Usage Example
```jsx
import React from 'react';
import Select from 'terra-form-select';

<Select
  name="foo"
  defaultValue="b"
  required
>
  <Select.Option value="m" display="moo" key="m" />
  <Select.Option value="b" display="boo" key="b" disabled />
  <Select.Option value="z" display="zar" key="z" />
</Select>
```

### Terra-form props table for select component
| Prop Name |	Type | Is Required | Default Value | Description |
|-----------|------|-------------|---------------|-------------|
|choices    |array |optional     |null	         |WARNING: This prop is deprecated, please use the options prop. List of choices to be selected. If choices and options array are supplied, options array will be used over choices.|
|options    |array of objects structured like:
 {
 `"value": {
  "name": "string",
  "required": true
 },
 "display": {
  "name": "string",
  "required": true
 },
 "disabled": {
  "name": "bool",
  "required": false
 }`
} |optional| null|
List of object key and value pairs for choices to be selected. If choices and options array are supplied, options array will be used over choices.|
|onChange   |func  | optional      |undefined	     | Function to trigger when the user changes the select value. Provide a function to create a controlled input. |
|name	      |string|optional       |null	         | Name of the select field.|
|required   |bool  |optional       |false	         | Whether the select is required or not. |
|defaultValue|string|optional      |undefined	     | The value to start the select on. |
|value	    |string|optional	     |undefined	     | The value of the select element. Use this to create a controlled input.|

### Terra-form-select v1.0.0 props table

#### Select
| Prop Name |	Type | Is Required | Default Value | Description |
|-----------|------|-------------|---------------|-------------|
|onChange   |func  | optional    |undefined	     | Function to trigger when the user changes the select value. |
|name	      |string|optional     |null	         | Name of the select field.|
|required   |bool  |optional     |false	         | Whether the select is required or not. |
|defaultValue|string|optional    |undefined	     | The value to start the select on. |
|value	    |string|optional	   |undefined	     | The value of the select element. Use this to create a controlled input.|
|disabled   |bool  |optional     |false          | Indicates if the select input should be disabled.|
|isInvalid  |bool  |optional     |false          | Indicates if the selected value is invalid.|
|children   |node  |required     |undefined      | Elements to be displayed as options.|

#### Select.Option
| Prop Name |	Type | Is Required | Default Value | Description |
|-----------|------|-------------|---------------|-------------|
|value      |string|required     |none           | Option value.|
|display    |string|optional     |none           | Option display text. |
|disabled   |bool  |optional     |false	         | Indicates if option should be disabled.|
|isSelected |bool  |optional     |false	         | Indicates the option is selected (only one option can be selected at a time).|
|children   |node  |optional     |none           |This should be used when custom option display content is needed. If both children and display are set, only display will be used.|
