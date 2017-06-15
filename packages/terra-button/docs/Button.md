| Prop Name | Type | Is Required | Default Value | Description | 
|-|-|-|-|-|
| children | `node`  | optional |  | Child Nodes |
| href | `string`  | optional |  | Sets the href. When set will render the component as an anchor tag |
| icon | `element`  | optional |  | An optional icon. Nested inline with the text when provided |
| isBlock | `bool`  | optional | `false` | Whether or not the button should display as a block |
| isCompact | `bool`  | optional | `false` | Whether or not the button has reduced padding |
| isDisabled | `bool`  | optional | `false` | Whether or not the button should be disabled |
| isReversed | `bool`  | optional | `false` | Reverses the position of the icon and text |
| onClick | `func`  | optional |  | Callback function triggered when clicked |
| size | `enum('tiny','small','medium','large','huge')`  | optional |  | Sets the button size. One of tiny, small, medium, large, huge |
| text | `string`  | optional |  | Sets the button text |
| variant | `enum('default','link','primary','secondary')`  | optional | `'default'` | Sets the button variant. One of primary, secondary, or link |