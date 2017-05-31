# Terra Table Themeable Variables

Variables to `theme` the terra-table component.

### Background Colors
| Variable Name | Default Value | Usage |
|---|---|---|
| $terra-table-background-color                     | $terra-white   | Sets the table background color|
| $terra-table-row-striped-background-color         | $terra-grey-5  | Sets the table-row background color for the striped modifier|
| $terra-table-subheader-background-color           | $terra-grey-25 | Sets the table header background color|
| $terra-table-thead-background-color               | $terra-grey-15 | Sets the thead background color|

### Border Styles
| Variable Name | Default Value | Usage |
|---|---|---|
| $terra-table-base-border-color                     | $terra-grey-25 | Sets the base table border color|
| $terra-table-base-border-width                     | 1px            | Sets the base table border width|
| $terra-table-border                                | 0              | Sets the table border|
| $terra-table-thead-tr-border-top                   | $terra-table-base-border-width solid $terra-table-base-border-color | Sets the top border of thead row|
| $terra-table-thead-tr-border-bottom                | 0              | Sets the bottom border of thead row|
| $terra-table-tfoot-tr-border-top                   | 0              | Sets the top border of tfoot row|
| $terra-table-tfoot-tr-border-bottom                | $terra-table-base-border-width solid $terra-table-base-border-color | Sets the bottom border of tfoot row|
| $terra-table-row-border-vertical                   | $terra-table-base-border-width solid $terra-table-base-border-color | Sets the left and right border style of table|
| $terra-table-row-border-horizontal                 | $terra-table-base-border-width solid $terra-table-base-border-color | Sets the top and bottom border style of table|
| $terra-table-cell-border                           | 0              | Sets the border between table cells|

### Table Header and Subheader Styles
| Variable Name | Default Value | Usage |
|---|---|---|
| $terra-table-subheader-font-size                   | 1 rem         | Sets the table subheader font style|
| $terra-table-subheader-font-weight                 | bold          | Sets the table subheader font weight|
| $terra-table-subheader-color                       | $terra-dark   | Sets the table subheader color|
| $terra-table-thead-th-font-size                    | 1 rem         | Sets the table header font style|
| $terra-table-thead-th-font-weight                  | bold          | Sets the table header font weight|
| $terra-table-thead-th-color                        | $terra-dark   | Sets the table header color|
| $terra-table-sort-indicator-color                  | $terra-dark   | Sets the table header sort indicator style|

### Cell Padding
| Variable Name | Default Value | Usage |
|---|---|---|
| $terra-table-cell-padding-top                     | 0.5em          | Sets the table-cell padding top|
| $terra-table-cell-padding-right                   | 0.75em         | Sets the table-cell padding right|
| $terra-table-cell-padding-bottom                  | 0.5em          | Sets the table-cell padding bottom|
| $terra-table-cell-padding-left                    | 0.75em         | Sets the table-cell padding left|

### Column Widths
| Variable Name | Default Value | Usage |
|---|---|---|
| $terra-table-cell-min-width-tiny                  | 3rem           | Sets the minimum width for the column|
| $terra-table-cell-min-width-small                 | 4.25rem        | Sets the minimum width for the column|
| $terra-table-cell-min-width-medium                | 5.75rem        | Sets the minimum width for the column|
| $terra-table-cell-min-width-large                 | 8.5rem         | Sets the minimum width for the column|
| $terra-table-cell-min-width-huge                  | 10.5rem        | Sets the minimum width for the column|

### Selection Styles
| Variable Name | Default Value | Usage |
|---|---|---|
| $terra-table-row-hover-background-color           | $terra-grey-10 | Sets the table-row background color for a hovered row|
| $terra-table-row-selected-background-color        | $terra-blue-10 | Sets the table-row background color for a selected row|
| $terra-table-row-selected-hover-background-color  | $terra-blue-20 | Sets the table-row background color for a hovered selected row|
| $terra-table-row-selected-border-color            | $terra-blue-70 | Sets the border color of a selected row |
| $terra-table-row-striped-hover-background-color   | darken($terra-blue-10, 2%) | Sets the table-row background color for a hovered row|
| $terra-table-row-striped-selected-background-color | darken($terra-blue-10, 5%) | Sets the table-row background color for a selected row|
| $terra-table-row-striped-selected-hover-background-color | darken($terra-blue-10, 10%) | Sets the table-row background color for a hovered selected row|
