| Prop Name | Type | Is Required | Default Value | Description | 
|-|-|-|-|-|
| ariaLabel | `string`  | `required` | `null` | String that labels the modal for screen readers |
| children | `node`  | `required` | `null` | Content inside the modal dialog |
| classNameModal | `string`  | optional | `null` | CSS classnames that are append to the modal |
| classNameOverlay | `string`  | optional | `null` | CSS classnames that are append to the overlay |
| closeOnEsc | `bool`  | optional | `true` | If set to true, the modal will close when the esc key is pressed |
| closeOnOutsideClick | `bool`  | optional | `true` | If set to true, the modal will close when a mouseclick is triggered outside the modal |
| isFullscreen | `bool`  | optional | `false` | If set to true, the modal will be fullscreen on all breakpoint sizes |
| isOpen | `bool`  | `required` | `false` | If set to true, the modal will rendered as opened |
| isScrollable | `bool`  | optional | `false` | If set to true, the modal dialog with have overflow-y set to scroll.
It is recommended not to use this prop and instead create a HOC
with the modal dialog body set to scroll. |
| onRequestClose | `func`  | `required` |  | Function to set isOpen={false} and close the modal. |
| role | `string`  | optional | `'document'` | Role attribute on the modal dialog |