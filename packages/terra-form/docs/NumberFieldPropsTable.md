| Prop Name | Type | Is Required | Default Value | Description |
|-|-|-|-|-|
| defaultValue| `number`| optional| `undefined`| The defaultValue of the input element. Use this to create an uncontrolled input|
| error| `node`| optional| `null`| Error message for when the input is invalid|
| help| `node`| optional| `null`| Help element to display with the input|
| inputAttrs| `object`| optional| `{}`| Additional attributes to attach to the number input|
| isInline| `bool`| optional| `false`| Whether the field is inline|
| label| `node`| optional| `null`| Label of the input|
| labelAttrs| `object`| optional| `{}`| Attributes to attach to the label|
| max| `number`| optional| `null`| Maximum value allowed for the input|
| min| `number`| optional| `null`| Minimum value allowed for the input|
| name| `string`| optional| `null`| Name of the input attribute|
| onChange| `func`| optional| `undefined`| Function to trigger when user changes the input value. Provide a function to create a controlled input.|
| required| `bool`| optional| `false`| Whether the input is required|
| step| `number`| optional| `null`| Incremental steps for increasing and descreasing the value|
| value| `union`| optional| `undefined`| The defaultValue of the input element. Use this to create an uncontrolled input.|