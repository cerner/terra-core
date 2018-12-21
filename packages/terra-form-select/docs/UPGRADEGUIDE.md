# Terra Form Select Upgrade Guide

## Changes from version 4 to version 5

### Changes to CSS Custom Properties

#### Renamed
| Previous | New |
|-|-|
| --terra-select-dropdown-background-color | --terra-form-select-dropdown-background-color |
| --terra-select-dropdown-border | --terra-form-select-dropdown-border |
| --terra-select-dropdown-border-radius | --terra-form-select-dropdown-border-bottom-left-radius |
| --terra-select-dropdown-border-radius | --terra-form-select-dropdown-border-bottom-right-radius |
| --terra-select-dropdown-box-shadow | --terra-form-select-dropdown-box-shadow |
| --terra-select-dropdown-border | --terra-form-select-dropdown-border |
| --terra-select-dropdown-border-radius | --terra-form-select-dropdown-border-top-left-radius |
| --terra-select-dropdown-border-radius | --terra-form-select-dropdown-border-top-right-radius |
| --terra-select-dropdown-above-box-shadow | --terra-form-select-dropdown-above-box-shadow |
| --terra-select-background-color | --terra-form-select-background-color |
| --terra-select-color | --terra-form-select-color |
| --terra-select-font-size | --terra-form-select-font-size |
| --terra-select-line-height | --terra-form-select-line-height |
| --terra-select-background-size | --terra-form-select-background-size |
| --terra-select-border | --terra-form-select-border |
| --terra-select-border-radius | --terra-form-select-border-radius |
| --terra-select-padding-bottom | --terra-form-select-padding-bottom |
| --terra-select-padding-left | --terra-form-select-padding-left |
| --terra-select-padding-right | --terra-form-select-padding-right |
| --terra-select-padding-top | --terra-form-select-padding-top |
| --terra-select-focus-background-image | --terra-form-select-focus-background-image |
| --terra-select-focus-background-size | --terra-form-select-focus-background-size |
| --terra-select-focus-border-color | --terra-form-select-focus-border-color |
| --terra-select-focus-box-shadow | --terra-form-select-focus-box-shadow |
| --terra-select-focus-transition-duration | --terra-form-select-focus-transition-duration |
| --terra-select-focus-transition-timing-function | --terra-form-select-focus-transition-timing-function |
| --terra-select-border-radius | --terra-form-select-open-border-top-left-radius |
| --terra-select-border-radius | --terra-form-select-open-border-top-right-radius |
| --terra-select-border-radius | --terra-form-select-above-border-bottom-left-radius |
| --terra-select-border-radius | --terra-form-select-above-border-bottom-right-radius |
| --terra-select-hover-border-color | --terra-form-select-hover-border-color |
| --terra-select-focus-hover-border-color | --terra-form-select-focus-hover-border-color |
| --terra-select-invalid-background-image | --terra-form-select-invalid-background-image |
| --terra-select-invalid-border-color | --terra-form-select-invalid-border-color |
| --terra-select-invalid-focus-background-size | --terra-form-select-invalid-focus-background-size |
| --terra-select-invalid-focus-border-color | --terra-form-select-invalid-focus-border-color |
| --terra-select-invalid-hover-border-color | --terra-form-select-invalid-hover-border-color |
| --terra-select-arrow-background | --terra-form-select-arrow-background |
| --terra-select-arrow-height | --terra-form-select-arrow-height |
| --terra-select-arrow-width | --terra-form-select-arrow-width |
| --terra-select-disabled-background-color | --terra-form-select-disabled-background-color |
| --terra-select-disabled-border-color | --terra-form-select-disabled-border-color |
| --terra-select-option-disabled-color | --terra-form-select-option-disabled-color |
| --terra-select-disabled-arrow-background | --terra-form-select-disabled-arrow-background |
| --terra-select-toggle-padding | --terra-form-select-toggle-padding |
| --terra-select-content-padding-bottom | --terra-form-select-content-padding-bottom |
| --terra-select-content-padding-left | --terra-form-select-content-padding-left |
| --terra-select-content-padding-right | --terra-form-select-content-padding-right |
| --terra-select-content-padding-top | --terra-form-select-content-padding-top |
| --terra-select-search-font-size | --terra-form-select-search-focus-font-size |
| --terra-select-search-height | --terra-form-select-search-focus-height |
| --terra-select-search-margin-top | --terra-form-select-search-focus-margin-top |
| --terra-select-search-placeholder-color | --terra-form-select-search-placeholder-color |
| --terra-select-search-placeholder-font-size | --terra-form-select-search-placeholder-font-size |
| --terra-select-background-size | --terra-form-select-background-size |
| --terra-select-border | --terra-form-select-border |
| --terra-select-border-radius | --terra-form-select-border-bottom-left-radius |
| --terra-select-border-radius | --terra-form-select-border-top-left-radius |
| --terra-select-padding-bottom | --terra-form-select-padding-bottom |
| --terra-select-padding-left | --terra-form-select-padding-left |
| --terra-select-padding-right | --terra-form-select-padding-right |
| --terra-select-padding-top | --terra-form-select-padding-top |
| --terra-select-toggle-border | --terra-form-select-toggle-border |
| --terra-select-border-radius | --terra-form-select-border-bottom-right-radius |
| --terra-select-border-radius | --terra-form-select-border-top-right-radius |
| --terra-select-focus-background-image | --terra-form-select-focus-background-image |
| --terra-select-focus-background-size | --terra-form-select-focus-background-size |
| --terra-select-focus-border-color | --terra-form-select-focus-border-color |
| --terra-select-focus-box-shadow | --terra-form-select-focus-box-shadow |
| --terra-select-focus-transition-duration | --terra-form-select-focus-transition-duration |
| --terra-select-focus-transition-timing-function | --terra-form-select-focus-transition-timing-function |
| --terra-select-border-radius | --terra-form-select-above-border-bottom-left-radius |
| --terra-select-border-radius | --terra-form-select-above-border-bottom-right-radius |
| --terra-select-focus-hover-border-color | --terra-form-select-focus-hover-border-color |
| --terra-select-invalid-background-image | --terra-form-select-invalid-background-image |
| --terra-select-invalid-border-color | --terra-form-select-invalid-border-color |
| --terra-select-invalid-focus-background-size | --terra-form-select-invalid-focus-background-size |
| --terra-select-invalid-focus-border-color | --terra-form-select-invalid-focus-border-color |
| --terra-select-invalid-focus-box-shadow | --terra-form-select-invalid-focus-box-shadow |
| --terra-select-invalid-hover-border-color | --terra-form-select-invalid-hover-border-color |
| --terra-select-invalid-arrow-background | --terra-form-select-invalid-arrow-background |
| --terra-select-menu-margin | --terra-form-select-menu-margin |
| --terra-select-menu-padding | --terra-form-select-menu-padding |
| --terra-select-no-results-padding | --terra-form-select-no-results-padding |
| --terra-select-optgroup-margin | --terra-form-select-optgroup-margin |
| --terra-select-optgroup-padding | --terra-form-select-optgroup-padding |
| --terra-select-optgroup-label-border-top | --terra-form-select-optgroup-label-border-top |
| --terra-select-optgroup-label-background-color | --terra-form-select-optgroup-label-background-color |
| --terra-select-optgroup-label-color | --terra-form-select-optgroup-label-color |
| --terra-select-optgroup-font-size | --terra-form-select-optgroup-label-font-size |
| --terra-select-optgroup-label-font-weight | --terra-form-select-optgroup-label-font-weight |
| --terra-select-optgroup-label-line-height | --terra-form-select-optgroup-label-line-height |
| --terra-select-optgroup-label-padding | --terra-form-select-optgroup-label-padding |
| --terra-select-optgroup-options-margin | --terra-form-select-optgroup-options-margin |
| --terra-select-optgroup-options-padding | --terra-form-select-optgroup-options-padding |
| --terra-select-option-color | --terra-form-select-option-color |
| --terra-select-option-font-size | --terra-form-select-option-font-size |
| --terra-select-option-line-height | --terra-form-select-option-line-height |
| --terra-select-option-padding | --terra-form-select-option-padding |
| --terra-select-option-pressed-background-color | --terra-form-select-default-option-active-background-color |
| --terra-select-option-pressed-color | --terra-form-select-default-option-active-color |
| --terra-select-option-pressed-font-weight | --terra-form-select-default-option-active-font-weight |
| --terra-select-option-selected-background-color | --terra-form-select-default-option-selected-background-color |
| --terra-select-option-selected-color | --terra-form-select-default-option-selected-color |
| --terra-select-option-selected-font-weight | --terra-form-select-default-option-selected-font-weight |
| --terra-select-option-selected-active-background-color | --terra-form-select-default-option-selected-active-background-color |
| --terra-select-tag-icon-height | --terra-form-select-tag-icon-height |
| --terra-select-option-icon-margin-right | --terra-form-select-option-icon-margin-right |
| --terra-select-tag-icon-width | --terra-form-select-tag-icon-width |
| --terra-select-option-icon-background | --terra-form-select-option-icon-background |
| --terra-select-option-icon-active-background | --terra-form-select-option-icon-active-background |
| --terra-select-option-icon-pressed-background | --terra-form-select-option-checkable-active-icon-background |
| --terra-select-option-icon-add-background | --terra-form-select-option-icon-add-background |
| --terra-select-option-active-background-color | --terra-form-select-option-active-background-color |
| --terra-select-tag-background | --terra-form-select-tag-background |
| --terra-select-tag-border-radius | --terra-form-select-tag-border-radius |
| --terra-select-tag-font-size | --terra-form-select-tag-font-size |
| --terra-select-tag-line-height | --terra-form-select-tag-line-height |
| --terra-select-tag-margin-right | --terra-form-select-tag-margin-right |
| --terra-select-tag-margin-top | --terra-form-select-tag-margin-top |
| --terra-select-tag-display-border-bottom | --terra-form-select-tag-display-border-bottom |
| --terra-select-tag-display-color | --terra-form-select-tag-display-color |
| --terra-select-tag-display-padding | --terra-form-select-tag-display-padding |
| --terra-select-tag-deselect-background | --terra-form-select-tag-deselect-background |
| --terra-select-tag-deselect-border-bottom | --terra-form-select-tag-deselect-border-bottom |
| --terra-select-tag-deselect-font-size | --terra-form-select-tag-deselect-font-size |
| --terra-select-tag-deselect-padding | --terra-form-select-tag-deselect-padding |
| --terra-select-tag-deselect-hover-background | --terra-form-select-tag-deselect-hover-background |
| --terra-select-tag-deselect-hover-border-bottom-hover | --terra-form-select-tag-deselect-hover-border-bottom |
| --terra-select-tag-icon-background | --terra-form-select-tag-icon-background |

#### Added
* --terra-form-select-border-radius
* --terra-form-select-hover-color
* --terra-form-select-invalid-background-color
* --terra-form-select-disabled-opacity
* --terra-form-select-search-placeholder-font-style
* --terra-form-select-hover-border-color
* --terra-form-select-hover-color
* --terra-form-select-toggle-hover-background-color
* --terra-form-select-invalid-background-color
* --terra-form-select-first-optgroup-label-padding
* --terra-form-select-optgroup-label-margin
* --terra-form-select-optgroup-label-font-style
* --terra-form-select-tag-height

#### Removed
* --terra-select-hover-border-color
