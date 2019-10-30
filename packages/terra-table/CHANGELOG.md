ChangeLog
=========

Unreleased
----------
### Breaking Changes
* terra-table now only provides controlled variants.
* Removed Component `SingleSelectTableRows` - No longer supported this uncontrolled variant of table.
* Removed Component `MultiSelectTableRows` - No longer supported this uncontrolled variant of table.
* Removed Component `SelectableTableRows` - Selection by index is no longer provided.
* Removed Component `TableRows` - body element now provided by default within the table.

3.28.0 - (October 30, 2019)
------------------
### Changed
* Minor dependency version bump

3.27.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency version bump

3.26.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.

3.25.0 - (September 6, 2019)
------------------
### Added
* Props table markdown file import added to doc site page

3.24.0 - (September 3, 2019)
------------------
### Changed
* Updated the 'keycode-js' version from '^1.0.4' to '^2.0.1'.

3.23.0 - (August 21, 2019)
------------------
### Changed
* Import for package version from package.json added to doc page
* Cleaned up imports in examples and test files

3.22.0 - (August 14, 2019)
------------------
### Changed
* updated package.json test scripts

3.21.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump

3.20.0 - (July 24, 2019)
------------------
### Changed
* Minor dependency version bump

3.19.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

3.18.0  - (July 11, 2019)
------------------
### Changed
* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`
* Increased subheader css specificity

3.17.0 - (June 28, 2019)
------------------
### Added
* Added themeable variable --terra-table-subheader-border-bottom

### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.

3.16.0 - (June 18, 2019)
------------------
### Changed
* Minor dependency bump

3.15.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

3.14.0 - (May 22, 2019)
------------------
### Changed
* Revert update to allow VoiceOver to read selectable table rows.
* Revert update to allow row selection with Voice Over + space.

3.13.0 - (May 21, 2019)
------------------
### Added
* Added missing en-US and en-AU table translations
* Updated to allow VoiceOver to read selectable table rows.
* Updated to allow row selection with Voice Over + space.

3.12.0 - (May 9, 2019)
------------------
### Changed
* Exclude subheader from zebra row styles.

3.11.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump

3.10.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

3.9.0 - (April 9, 2019)
------------------
### Changed
* Minor dependency version bump

3.8.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

3.7.0 - (March 21, 2019)
------------------
### Changed
* Replaced local keyCode values with keycode-js npm package

3.6.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

### Added
* Added stylelint-enable to Table.module.scss

3.5.0 - (February 12, 2019)
------------------
### Changed
* Minor dependency version bump

3.4.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency version bump

3.3.0 - (January 26, 2019)
------------------
### Changed
* Minor dependency version bump

3.2.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

3.1.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

3.0.0 - (January 8, 2019)
------------------
### Changed
* Updated theme variables

2.32.0 - (January 2, 2019)
------------------
### Changed
* Split focus and hover styles to separate blocks

### Added
* Table header (th) styles
* Minor dependency version bump
* Updated site examples to be more accessible.

2.31.1 - (November 20, 2018)
------------------
### Changed
* Patch dependency version bump

2.31.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.30.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.29.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.28.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

2.27.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

2.26.0 - (October 8, 2018)
------------------
### Changed
* Minor dependency version bump

2.25.0 - (October 2, 2018)
------------------
### Added
* Exports for table header cell minimum width and sort added.

### Changed
* SingleSelectableRows documentation

2.24.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

2.23.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

2.23.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.22.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

2.21.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

2.20.0 - (August 8, 2018)
------------------
### Added
* Added documentation pages for TableRows, SelectableTableRows, and SingleSelectableRows

### Changed
* Changed background color to transparent

2.19.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

2.18.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

2.17.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

2.16.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

2.15.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

2.14.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

2.13.0 - (June 12, 2018)
------------------
### Changed
* Convert nightwatch tests to wdio.
* Updated "test:jest" script to work on windows.

2.12.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

2.11.0 - (May 25, 2018)
------------------
### Changed
* Minor dependency version bump

2.10.0 - (May 23, 2018)
------------------
### Changed
* Minor dependency version bump

2.9.0 - (May 16, 2018)
------------------
### Changed
* Minor dependency version bump

2.8.0 - (May 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.7.0 - (May 2, 2018)
------------------
### Changed
* Minor dependency version bump

2.6.0 - (April 20, 2018)
------------------
### Changed
* Minor dependency version bump

2.5.0 - (April 15, 2018)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (April 5, 2018)
------------------
### Changed
* Minor dependency version bump

2.3.0 - (March 30, 2018)
------------------
### Changed
* Fixed issue with setting onClick handler on TableHeaderCell

2.2.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

2.1.0 - (February 26, 2018)
------------------
### Changed
* Minor dependency version bump

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16

1.20.0 - (February 1, 2018)
------------------
### Changed
* Moved table sort indicator

1.19.0 - (January 18, 2018)
------------------
### Changed
* Minor dependency version bump

1.18.0 - (January 5, 2018)
------------------
### Changed
* Minor dependency version bump

1.17.0 - (November 28, 2017)
------------------
### Changed
* Minor dependency version bump

1.16.0 - (November 16, 2017)
------------------
### Added
* MultiSelectableRows component

1.15.0 - (November 7, 2017)
------------------
### Changed
* Minor dependency version bump

1.14.0 - (October 24, 2017)
------------------
### Changed
* Minor dependency version bump

1.13.0 - (October 6, 2017)
------------------
### Added
* SelectableTableRows component

### Changed
* Refactor Single Selectable Rows typecheck
* Refactor nightwatch tests
* Updated SingleSelectableRows to utilize the SelectableTableRows component

### Fixed
* Initial Single Select Table render to accept an isSelected Row

1.12.0 - (September 26, 2017)
------------------
### Removed
* Remove stylelint-disable selector-class-pattern

1.11.0 - (September 19, 2017)
------------------
### Changed
* Minor dependency version bump

1.10.0 - (September 12, 2017)
------------------
### Changed
* Update selection styles

1.9.0 - (September 7, 2017)
------------------
### Changed
* Minor dependency version bump

1.8.0 - (September 5, 2017)
------------------
### Changed
* Update nightwatch tests and test scripts.

1.7.0 - (August 31, 2017)
------------------
### Changed
* Minor dependency version bump

1.6.0 - (August 15, 2017)
------------------
### Changed
* Minor dependency version bump

1.5.0 - (August 8, 2017)
------------------
### Changed
* Change data-class to be name spaced

1.4.0 - (August 1, 2017)
------------------
### Fixed
* Fixed typo which dropped custom class names on TableCell component

1.3.0 - (August 1, 2017)
------------------
### Changed
* Converted component to use CSS modules

1.2.0 - (July 26, 2017)
------------------
### Changed
* Minor dependency version bump

1.1.0 - (July 18, 2017)
------------------
### Added
* Added preventDefault to SingleSelect table row
* Added missing props-tables

### Changed
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file


1.0.0 - (June 28, 2017)
------------------
Initial stable release