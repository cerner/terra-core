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
* col -> tiny (0px)
* tiny -> small (544px)
* small -> medium (768px)
* medium -> large (992px)
* large -> huge (1216px)
* huge -> enormous (1440px)

## Changes from version 4 to version 5

### Changes to CSS Custom Properties

#### Removed
* --terra-grid-gutter-width

#### Added
* --terra-grid-gutter-margin-left
* --terra-grid-gutter-padding-left
