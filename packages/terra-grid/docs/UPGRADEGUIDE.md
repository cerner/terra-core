# Terra Grid Upgrade Guide

## Changes from version 5 to version 6

### Changes to usage/import of terra-breakpoints

#### Removed
* _variables.scss file within terra-grid (housed breakpoints)
* col breakpoint (is now named 'tiny')

#### Added
* Import statement to import breakpoint size props from terra-breakpoints component
* 'enormous' breakpoint (originally 'huge')

#### Changed
* Renamed `col` prop to `tiny`
* Renamed `tiny` prop to `small`
* Renamed `small` prop to `medium`
* Renamed `medium` prop to `large`
* Renamed `large` prop to `huge`
* Renamed `huge` prop to `enormous`

## Changes from version 4 to version 5

### Changes to CSS Custom Properties

#### Removed
* --terra-grid-gutter-width

#### Added
* --terra-grid-gutter-margin-left
* --terra-grid-gutter-padding-left
