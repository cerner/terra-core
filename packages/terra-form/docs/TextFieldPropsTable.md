| Prop Name | Type | Is Required | Default Value | Description |
|-|-|-|-|-|
| defaultValue| `string`| optional| `undefined`| The defaultValue of the input element. Use this to create an uncontrolled input.|
| error| `node`| optional| `null`| Error message for when the input is invalid|
| help| `node`| optional| `null`| Help element to display with the input|
| inputAttrs| `object`| optional| `{}`| Custom attributes to apply to the input|
| isInline| `bool`| optional| `false`| Whether the field is inline|
| label| `node`| optional| `null`| Label of the input|
| labelAttrs| `object`| optional| `{}`| Attributes to attach to the label|
| maxLength| `number`| optional| `null`| Maximum number of characters user can input in this field|
| minLength| `number`| optional| `null`| Minimum number of characters user must input in this field|
| name| `string`| optional| `null`| Name of the input attribute|
| onChange| `func`| optional| `undefined`| Function to trigger when the user changes the input value. Provide one to create a controlled input.|
| required| `bool`| optional| `false`| Whether the input is required|
| type| `string`| optional| `'text'`| Type the input will be|
| value| `string`| optional| `undefined`| The value of the input element. Use this to create a controlled input.|