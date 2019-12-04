# Terra Form Radio Upgrade Guide

## Changes from version 3 to version 4

### Props

#### Updated
* Form Fields allowed the `label` to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in.
* `labelText` prop's type changed from node to string.
* `legend` prop's type changed from node to string.

##### Steps to Upgrade
To upgrade from 3.0 to 4.0 each existing Radio must be reviewed and updated to ensure only a string is being passed to the `labelText` and `legend ` props. Solutions passing node data types need to be reworked to provide only a string.

## Changes from version 2 to version 3

### Changes to CSS Custom Properties

#### Renamed
| Previous | New |
|-|-|
| --terra-form-radio-outer-ring-checked-hover-border-color | --terra-form-radio-hover-checked-outer-ring-border-color |
| --terra-form-radio-outer-ring-checked-hover-border-width | --terra-form-radio-hover-checked-outer-ring-border-width |
| --terra-form-radio-focus-ring-background-color | --terra-form-radio-focus-before-ring-background-color |
| --terra-form-radio-focus-ring-height | --terra-form-radio-focus-before-ring-height |
| --terra-form-radio-focus-ring-left | --terra-form-radio-focus-before-ring-left |
| --terra-form-radio-focus-ring-top | --terra-form-radio-focus-before-ring-top |
| --terra-form-radio-focus-ring-width | --terra-form-radio-focus-before-ring-width |
| --terra-form-radio-field-error-icon | --terra-form-radio-field-error-background |

#### Added
* --terra-form-radio-field-label-error-icon-margin-right

#### Removed
* --terra-form-radio-field-label-error-icon-padding-right
