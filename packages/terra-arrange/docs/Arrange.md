| Prop Name | Type | Is Required | Default Value | Description | 
|-|-|-|-|-|
| align | `enum('center','bottom','stretch')`  | optional |  | The vertical orientation of all three containers. It will override the aligment of alignFitStart, alignFill and alignFitEnd if given. One of: `center`, `bottom`, `stretch`. |
| alignFill | `enum('center','bottom','stretch')`  | optional |  | The vertical orientation of fitEnd. One of: `center`, `bottom`, `stretch`. |
| alignFitEnd | `enum('center','bottom','stretch')`  | optional |  | The vertical orientation of fill. One of: `center`, `bottom`, `stretch`. |
| alignFitStart | `enum('center','bottom','stretch')`  | optional |  | The vertical orientation of fitStart. One of: `center`, `bottom`, `stretch`. |
| fill | `element`  | `required` |  | The content to display in the body of the fill. |
| fitEnd | `element`  | optional |  | The content to display in the body of the fitEnd. |
| fitStart | `element`  | optional |  | The content to display in the body of the fitStart. |