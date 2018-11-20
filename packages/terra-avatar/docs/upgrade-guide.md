# terra-avatar Upgrade Guide
## V2 Major Updates
### Removed
* `variant` prop. Avatar is now split into three sub components - Avatar, Facility, and SharedUser. Import them by using named imports.

### Added
* `alt` prop. Represents alternative text. This is required on all variants for accessibility.
* `color` prop. This controls theme specific colors. By default, it is set to `auto`. `auto` hashes the `alt` prop to generate a color. See prop tables for accepted values.
* `hashValue` prop. This value will be used in place of `alt` to generate a color. Use this if `alt` should not be used to generate a color.
* `isDeceased` prop. Applies deceased styles to the `avatar` variant.
* `isAriaHidden` prop. This controls whether to hide the component from accessibility. Use this when avatar is purely decorative in nature.
* `size` prop.

### Updated
* `initials` prop now only accepts one or two letters.

## Steps to uplift to V2
1. Use a named export to specify which variant to use.
2. Specify alternative text, using the `alt` prop.
3. Profit.

## Uplift Code Examples
### V1 Code
```javascript
import Avatar from 'terra-avatar'

<Avatar variant="Patient 1" initials="AAA" />
<Avatar variant="facility" />
```

### V2 Code
```javascript
import {Avatar, Facility} from 'terra-avatar'

<Avatar alt="Patient 1" initials="AA" />
<Facility alt="Location 1" />
```