# Terra Alert Upgrade Guide

## Changes from version 3 to version 4

### Props
#### Removed
* `customStatusColor` prop. The prop was used to set the cutom alert color as inline style.

#### Added
* `customColorClass` prop. This prop allows user to provide their own CSS and bind the className to that in CSS.

### Changes to CSS Custom Properties

#### Added
* --terra-alert-custom-default-color

### Steps to uplift to V4
1. import `classNames/bind` and `CSS`. 
2. Use `ClassNames.bind()` function to bind `CSS` to the `ClassName`.

#### V3 Code
```javascript
import Alert from 'terra-alert';

<Alert type="custom" customStatusColor="orange" />
```

#### V4 Code
##### CSS
```CSS
:local {
  .my-app-alert-attention-example {
    color: var(--terra-alert-attention-example-color, #fa0000);
  }
```
##### JavaScript
```javascript
import Alert from 'terra-alert';
import classNames from 'ClassNames/bind';
import styles from './CSS';

const cx = classNames.bind(styles);

<Alert type="custom" customColorClass={cx(['my-app-alert-attention-example'])} />

```

## Changes from version 2 to version 3


### Changes to CSS Custom Properties

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
* --terra-alert-body-margin-left
* --terra-alert-body-margin-right
* --terra-alert-body-margin-top
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
