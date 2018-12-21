# Terra Action Header Upgrade Guide

## Changes from 2.0 to 3.0

### Changes to CSS Custom Properties

CSS Custom Properties have been updated to follow naming conventions. A CSS property should define the component, state, and property it controls.

#### Renamed

| Previous | Updated |
|-|-|
| --terra-action-header-back-icon | --terra-action-header-back-background |
| --terra-action-header-close-icon | --terra-action-header-close-background |
| --terra-action-header-maximize-icon | --terra-action-header-maximize-background |
| --terra-action-header-minimize-icon | --terra-action-header-minimize-background |
| --terra-action-header-previous-icon | --terra-action-header-previous-background |
| --terra-action-header-next-icon | --terra-action-header-next-background |

#### Removed
* --terra-alert-alert-shadow-color
* --terra-alert-error-shadow-color
* --terra-alert-warning-shadow-color
* --terra-alert-advisory-shadow-color
* --terra-alert-info-shadow-color
* --terra-alert-success-shadow-color
* --terra-alert-custom-shadow-color

#### Added
* --terra-alert-color
* --terra-alert-min-height
* --terra-alert-icon-margin-left
* --terra-alert-icon-margin-right
* --terra-alert-icon-margin-top
* --terra-alert-margin-left
* --terra-alert-margin-right
* --terra-alert-margin-top
* --terra-alert-std-margin-bottom
* --terra-alert-std-margin-right
* --terra-alert-section-padding-bottom
* --terra-alert-section-padding-top
* --terra-alert-title-display
* --terra-alert-title-float
* --terra-alert-title-margin-bottom
* --terra-alert-title-margin-right
* --terra-alert-actions-margin-bottom
* --terra-alert-actions-margin-left
* --terra-alert-actions-margin-right
* --terra-alert-actions-margin-top
* --terra-alert-alert-box-shadow
* --terra-alert-error-box-shadow
* --terra-alert-warning-box-shadow
* --terra-alert-advisory-box-shadow
* --terra-alert-info-box-shadow
* --terra-alert-success-box-shadow
* --terra-alert-custom-box-shadow