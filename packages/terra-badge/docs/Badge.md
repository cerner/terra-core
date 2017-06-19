| Prop Name | Type | Is Required | Default Value | Description |
|-|-|-|-|-|
| children| `node`| optional| `null`| Child Nodes.|
| icon| `element`| optional| `null`| An optional icon. Nested inline with the text when provided.|
| intent| `enum('default','primary','secondary','info','warning','positive','negative')`| optional| `'default'`| Sets the badge color scheme. One of `primary`, `secondary`, `positive`, `negative`, `warning`, `info`.|
| isReversed| `bool`| optional| `false`| Reverses the position of the icon and text.|
| size| `enum('tiny','small','medium','large','huge')`| optional| `'small'`| Sets the badge size. One of tiny, small, medium, large, huge.|
| text| `string`| optional| `null`| Sets the badge text.|