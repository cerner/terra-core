# terra-avatar Upgrade Guide
## Changes from version 2 to version 3

### Reason for upgrade
* To group all user avatars in single variant `shared-user` has been replaced with `generic` sub-component
* To keep adding new user avatars like `provider` easier new `generic` sub-component has been added with all user avatars as variants. 

### Removed
* `Shared User` subcomponent From Avatar

### Added
* The `generic` subcomponent that replaces the `sharedUser` subcomponent with a new `variant` prop that can be `single-user`, `shared-user`, or `provider`.
* `variant` prop will take values for sub-variants `single-user`, `shared-user` and `provider`.
* `user` avatar has been moved into `generic` sub-comopnent with varaint name `single-user`.

### Steps to uplift to V3
1. Use a named export for Generic variant.
2. Use variant prop of Generic to set sub-variant icons like `single-user`, `shared-user` and `provider` for Avatar.

#### V2 Code
```javascript
import { SharedUser} from 'terra-avatar';

<SharedUser alt="Patient 1" />
```

```javascript
import { Avatar} from 'terra-avatar';

<Avatar id="user-avatar" alt="user"/>
```

#### V3 Code
```javascript
import { Generic } from 'terra-avatar'

<Generic variant="shared-user" alt="Patient 1" />
```

```javascript
import { Generic} from 'terra-avatar';

<Generic variant="single-user" alt="Patient 1" />
```

## Changes from version 1 to version 2

### Props
#### Removed
* `variant` prop. Avatar is now split into three sub components - `Avatar`, `Facility`, and `SharedUser`. `Avatar` is the default export, while `Facility` and `SharedUser` are named exports.

#### Added
* `alt` prop. Represents alternative text. This is required on all variants for accessibility.
* `color` prop. This controls theme specific colors. By default, it is set to `auto`. `auto` hashes the `alt` prop to generate a color. See prop tables for accepted values.
* `hashValue` prop. This value will be used in place of `alt` to generate a color. Use this if `alt` should not be used to generate a color.
* `isDeceased` prop. Applies deceased styles to the `avatar` variant.
* `isAriaHidden` prop. This controls whether to hide the component from accessibility. Use this when avatar is purely decorative in nature.
* `size` prop.

#### Updated
* `initials` prop now only accepts one or two letters.

### Changes to CSS Custom Properties

#### Renamed

| Previous | Updated |
|-|-|
| --terra-avatar-icon-facility | --terra-avatar-icon-facility-background-image |
| --terra-avatar-icon-user | --terra-avatar-icon-user-background-image |

#### Removed
* --terra-avatar-background-color
* --terra-avatar-box-shadow
* --terra-avatar-size
* --terra-avatar-font-size-large
* --terra-avatar-font-size-small

#### Added
* --terra-avatar-height
* --terra-avatar-width
* --terra-avatar-icon-shared-user-background-image
* --terra-avatar-initials-font-size
* --terra-avatar-initials-font-weight
* --terra-avatar-neutral-background-color
* --terra-avatar-neutral-after-box-shadow
* --terra-avatar-one-background-color
* --terra-avatar-one-after-box-shadow
* --terra-avatar-two-background-color
* --terra-avatar-two-after-box-shadow
* --terra-avatar-three-background-color
* --terra-avatar-three-after-box-shadow
* --terra-avatar-four-background-color
* --terra-avatar-four-after-box-shadow
* --terra-avatar-five-background-color
* --terra-avatar-five-after-box-shadow
* --terra-avatar-six-background-color
* --terra-avatar-six-after-box-shadow
* --terra-avatar-seven-background-color
* --terra-avatar-seven-after-box-shadow
* --terra-avatar-eight-background-color
* --terra-avatar-eight-after-box-shadow
* --terra-avatar-nine-background-color
* --terra-avatar-nine-after-box-shadow
* --terra-avatar-ten-background-color
* --terra-avatar-ten-after-box-shadow
* --terra-avatar-is-deceased-background-color
* --terra-avatar-image-is-deceased-opacity
* --terra-avatar-is-deceased-after-box-shadow

### Steps to uplift to V2
1. Use the default export for the `Avatar` variant. Use a named export for `Facility` and `SharedUser` variants.
2. Specify alternative text, using the `alt` prop.
3. Profit.

#### V1 Code
```javascript
import Avatar from 'terra-avatar'

<Avatar variant="Patient 1" initials="AAA" />
<Avatar variant="facility" />
```

#### V2 Code
```javascript
import Avatar, { Facility } from 'terra-avatar'

<Avatar alt="Patient 1" initials="AA" />
<Facility alt="Location 1" />
```

