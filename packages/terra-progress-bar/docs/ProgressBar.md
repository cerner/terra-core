| Prop Name | Type | Is Required | Default Value | Description |
|-|-|-|-|-|
| color| `string`| optional| | The color of the progress bar. Accepts a CSS color value.|
| heightSize| `enum('tiny','small','medium','large','huge')`| optional| `'small'`| Sets the size of the progress-bar from the following values; `tiny`, `small`, `medium`, `large` and `huge`|
| max| `number`| optional| `100`| Sets the maximum possible fill-value.|
| value| `number`| `required`| `0`| Sets the fill-value of the progress bar with respect to the `max` prop.|