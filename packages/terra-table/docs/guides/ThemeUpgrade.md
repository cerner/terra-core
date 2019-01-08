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
* --terra-table-header-cell-padding-bottom
* --terra-table-header-cell-padding-left
* --terra-table-header-cell-padding-right
* --terra-table-header-cell-padding-top
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

#### Added
<!-- * --terra-table-header-cell-border-left -->

#### Removed
* --terra-table-tfoot-tr-border-bottom
* --terra-table-tfoot-tr-border-top
* --terra-table-subheader-background-color
* --terra-table-subheader-color
* --terra-table-subheader-font-size
* --terra-table-subheader-font-weight