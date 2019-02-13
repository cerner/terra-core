# Terra Table Theme Upgrade Guide

## Changes from version 2 to version 3

### Changes to CSS Custom Properties

#### Renamed
| Previous | New |
|-|-|
| --terra-table-cell-border | --terra-table-cell-border-left |
| --terra-table-row-border-vertical | --terra-table-first-cell-border-left |
| --terra-table-row-border-vertical | --terra-table-last-cell-border-right |
| --terra-table-row-border-horizontal | --terra-table-row-border-top |
| --terra-table-row-border-horizontal | --terra-table-last-row-border-bottom |
| --terra-table-cell-min-width-tiny | --terra-table-cell-tiny-min-width |
| --terra-table-cell-min-width-small | --terra-table-cell-small-min-width |
| --terra-table-cell-min-width-medium | --terra-table-cell-medium-min-width |
| --terra-table-cell-min-width-large | --terra-table-cell-large-min-width |
| --terra-table-cell-min-width-huge | --terra-table-cell-huge-min-width |
| --terra-table-row-selected-border-color | --terra-table-row-selected-border-top-color |

#### Added
* --terra-table-header-cell-border-left
* --terra-table-first-header-cell-border-left
* --terra-table-last-header-cell-border-right
* --terra-table-tbody-background-color
* --terra-table-sort-indicator-width
* --terra-table-header-cell-height
* --terra-table-row-striped-focus-background-color
* --terra-table-row-striped-selected-focus-background-color
* --terra-table-row-focus-background-color
* --terra-table-row-selected-focus-background-color

## Changes from version 3 to version 4

### Changes to CSS Custom Properties

#### Renamed
| Previous | New |
|-|-|
| --terra-table-cell-border | --terra-table-cell-border-left |
| --terra-table-thead-background-color | --terra-table-header-background-color |
| --terra-table-thead-tr-border-top | --terra-table-header-border-top |
| --terra-table-cell-tiny-min-width | --terra-table-header-cell-tiny-min-width |
| --terra-table-cell-small-min-width | --terra-table-header-cell-small-min-width |
| --terra-table-cell-medium-min-width | --terra-table-header-cell-medium-min-width |
| --terra-table-cell-large-min-width | --terra-table-header-cell-large-min-width |
| --terra-table-cell-huge-min-width | --terra-table-header-cell-huge-min-width |
| --terra-table-thead-th-color | --terra-table-header-cell-color |
| --terra-table-thead-th-font-size | --terra-table-header-cell-font-size |
| --terra-table-thead-th-font-weight | --terra-table-header-cell-font-weight |
| --terra-table-row-striped-focus-background-color | --terra-table-row-striped-hover-focus-background-color |
| --terra-table-row-striped-selected-focus-background-color | --terra-table-row-striped-selected-hover-focus-background-color |
| --terra-table-row-hover-background-color | --terra-table-row-hover-focus-background-color |
| --terra-table-row-selected-hover-background-color | --terra-table-row-selected-hover-focus-background-color |

#### Added
* --terra-table-row-focus-outline
* --terra-table-row-focus-border-bottom
* --terra-table-row-focus-border-color
* --terra-table-row-focus-box-shadow
* --terra-table-section-header-background-color
* --terra-table-section-header-border-bottom
* --terra-table-section-header-padding-bottom
* --terra-table-section-header-padding-left
* --terra-table-section-header-padding-top
* --terra-table-section-header-title-color
* --terra-table-section-header-title-font-size
* --terra-table-section-header-title-line-height
* --terra-table-section-header-collapsible-padding-left
* --terra-table-section-header-focus-background-color
* --terra-table-section-header-focus-box-shadow
* --terra-table-section-header-focus-outline
* --terra-table-section-header-hover-active-background-color
* --terra-table-section-header-start-padding-right
* --terra-table-subsection-header-background-color
* --terra-table-subsection-header-border-bottom
* --terra-table-subsection-header-padding-bottom
* --terra-table-subsection-header-padding-left
* --terra-table-subsection-header-padding-top
* --terra-table-subsection-header-title-color
* --terra-table-subsection-header-padding-top
* --terra-table-subsection-header-title-font-size
* --terra-table-subsection-header-title-line-height
* --terra-table-subsection-header-collapsible-padding-left
* --terra-table-subsection-header-focus-background-color
* --terra-table-subsection-header-focus-box-shadow
* --terra-table-subsection-header-focus-outline
* --terra-table-subsection-header-hover-active-background-color
* --terra-table-subsection-header-start-padding-right
* --terra-table-cell-standard-padding-bottom
* --terra-table-cell-standard-padding-left
* --terra-table-cell-standard-padding-right
* --terra-table-cell-standard-padding-top
* --terra-table-cell-compact-padding-bottom
* --terra-table-cell-compact-padding-left
* --terra-table-cell-compact-padding-right
* --terra-table-cell-compact-padding-top
* --terra-table-header-cell-selectable-outline
* --terra-table-header-cell-focus-background-color
* --terra-table-header-cell-focus-border-color
* --terra-table-header-cell-focus-box-shadow
* --terra-table-header-cell-standard-padding-bottom
* --terra-table-header-cell-standard-padding-left
* --terra-table-header-cell-standard-padding-right
* --terra-table-header-cell-standard-padding-top
* --terra-table-header-cell-compact-padding-bottom
* --terra-table-header-cell-compact-padding-left
* --terra-table-header-cell-compact-padding-right
* --terra-table-header-cell-compact-padding-top
* --terra-table-header-cell-icon-padding-right

#### Removed
* --terra-table-tfoot-tr-border-bottom
* --terra-table-tfoot-tr-border-top
* --terra-table-subheader-background-color
* --terra-table-subheader-color
* --terra-table-subheader-font-size
* --terra-table-subheader-font-weight
* --terra-table-cell-padding-bottom
* --terra-table-cell-padding-left
* --terra-table-cell-padding-right
* --terra-table-header-cell-padding-bottom
* --terra-table-header-cell-padding-left
* --terra-table-header-cell-padding-right
* --terra-table-header-cell-padding-top
