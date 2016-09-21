# Terra Grid _(Currently in beta)_

The terra-grid component provides a flexbox based grid system.

## Getting Started

- Install with [npm](https://www.npmjs.com): `npm install terra-grid`
- [Download the latest version](https://github.com/cerner/terra-grid/archive/master.zip)
- Clone the repo: `git clone https://github.com/cerner/terra-grid.git`


## Themeable Variables

Variables to `theme` the terra-grid component.

| Variable Name             | Default value                        | Usage                                               |
|---------------------------|--------------------------------------|-----------------------------------------------------|
| $terra-grid-breakpoints   | $terra-breakpoints (check the theme) | Set the breakpoints to generate classes for         |
| $terra-grid-gutter-width  | 1rem                                 | Set the spacing between columns                     |
| $terra-grid-total-columns | 12                                   | Set the total number of columns for the grid system |


## Usage
The grid consists minimally of:

- A container with the class of `terra-Grid`
- Child containers with the class of `terra-Grid-col`

Beyond the basic structure, many modifiers are available to customize the layout and behavior of the grid system.
