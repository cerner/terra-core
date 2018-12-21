# Terra Badge Upgrade Guide

## Changes from 2.0 to 3.0

### Changes to CSS Custom Properties

CSS Custom Properties have been updated to follow naming conventions. A CSS property should define the component, state, and property it controls.

#### Renamed

| Previous | Updated |
|-|-|
| --terra-badge-font-size-tiny | --terra-badge-tiny-font-size |
| --terra-badge-font-size-small | --terra-badge-small-font-size |
| --terra-badge-font-size-medium | --terra-badge-medium-font-size |
| --terra-badge-font-size-large | --terra-badge-large-font-size |
| --terra-badge-font-size-huge | --terra-badge-huge-font-size |

#### Removed
* --terra-badge-child-margin

#### Added
* --terra-badge-border
* --terra-action-header-title-padding
* --terra-badge-default-font-size
* --terra-badge-child-margin-right
* --terra-badge-child-margin-left