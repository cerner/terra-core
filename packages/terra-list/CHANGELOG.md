ChangeLog
=========

Unreleased
----------

4.27.0 - (March 10, 2020)
------------------
### Changed
* Update docs to use mdx syntax.

4.26.0 - (February 18, 2020)
------------------
### Added
* Added clinical-lowlight-theme theming files

4.25.0 - (January 28, 2020)
------------------
### Changed
* Minor dependency version bump

4.24.0 - (January 7, 2020)
------------------
### Removed
* Removed yarn reference in docs

4.23.0 - (December 3, 2019)
------------------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.

4.22.0 - (October 30, 2019)
------------------
### Changed
* Minor dependency version bump

4.21.0 - (October 14, 2019)
------------------
### Changed
* Minor dependency version bump

4.20.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency version bump

4.19.0 - (September 19, 2019)
------------------
### Changed
* Updated the example and test to have `aria-label`
* Updated docs and guides.
* Removed `details` tag from doc-site

4.18.0 - (September 6, 2019)
------------------
### Added
* Props table markdown file import added to doc site page

4.17.0 - (September 3, 2019)
------------------
### Changed
* Updated the 'keycode-js' version from '^1.0.4' to '^2.0.1'.

4.16.0 - (August 21, 2019)
------------------
### Changed
* Import for package version from package.json added to doc page
* Cleaned up imports in examples and test files

4.15.0 - (August 14, 2019)
------------------
### Changed
* updated package.json test scripts

4.14.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump

4.13.0 - (July 24, 2019)
------------------
### Changed
* Minor dependency version bump

4.12.0 - (July 17, 2019)
------------------
### Changed
* Minor dependency version bump

4.11.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

### Changed
* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`
* Fixed linting errors in documentation

4.10.0  - (July 11, 2019)
------------------
### Changed
* Minor dependency version bump

4.9.0 - (June 28, 2019)
------------------
### Changed
* Fixed accessibility issue in list item tests
* Update mixin import to work better with codesandbox.io
* Removed all inline styles from Dev-site components and implemented the same styles using external css.

4.8.0 - (June 18, 2019)
------------------
### Changed
* Minor dependency bump

4.7.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

4.6.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump

4.5.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

### Added
* Added an interaction media query to apply `hover` styles over a list-item only on non-touch devices.

4.4.0 - (April 9, 2019)
------------------
### Changed
* Update documentation to better cover sections and headers and for guides to be more interactive

4.3.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

4.2.0 - (March 21, 2019)
------------------
### Changed
* Replaced local keyCode values with keycode-js npm package

4.1.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

4.0.0 - (February 12, 2019)
------------------
### Breaking Changes - [Upgrade Guide](https://github.com/cerner/terra-core/tree/master/packages/terra-list/docs/guides)
* Removed Component `SingleSelectList` - No longer supported this uncontrolled variant of list.
* Removed Component `MultiSelectList` - No longer supported this uncontrolled variant of list.
* Removed Component `SelectableList` - Removed to avoid the need for cloning child props.
* Removed Util `validatedMaxCount`.
* Removed Util `initialSingleSelectedIndex`.
* Removed Util `initialMultiSelectedIndexes`.
* Removed Util `shouldHandleMultiSelect`.
* Removed Util `shouldHandleSingleSelect`.
* Removed Util `newPropsForItem`.
* Added Component `ListSection` - Collapsible and Static functionality implementing the ListSectionHeader.
* Added Component `ListSubsection` - Collapsible and Static functionality implementing the ListSubsectionHeader.
* Added Component `ListSectionHeader` - Section styled header.
* Added Component `ListSubsectionHeader` - Subsection styled header.
* Change from dot notation for ListItem and Utils access to individual exports for Item, Utils, SectionHeader, SubsectionHeader, Section, and Subsection.
* Moved accessibility logic into the ListItem.

3.5.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency version bump

3.4.0 - (January 27, 2019)
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
* Update chevron size to 1em

2.32.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency version bump

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
### Changed
* Minor dependency version bump

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

2.20.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

### Fixed
* Aria attributes are applied to ListItems based upon selectability rather than chevron status

2.19.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

2.18.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

2.17.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

2.16.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

2.15.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency
* Changed Nightwatch to WebdriverIO tests.

### Removed
* ListItem tests

2.14.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.
* Updated `ListItem`s to set a width on contents when using chevrons

2.13.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

2.12.0 - (May 25, 2018)
------------------
### Changed
* Minor dependency version bump

2.11.0 - (May 23, 2018)
------------------
### Changed
* Minor dependency version bump

2.10.0 - (May 16, 2018)
------------------
### Changed
* Minor dependency version bump

2.9.0 - (May 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.8.0 - (May 2, 2018)
------------------
### Changed
* Minor dependency version bump

2.7.0 - (April 20, 2018)
------------------
### Added
* Listbox role for selectable lists
* Option role for list items
* aria-selected attribute on list items

2.6.0 - (April 15, 2018)
------------------
### Changed
* Minor dependency version bump

2.5.0 - (April 5, 2018)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (March 30, 2018)
------------------
### Changed
* Minor dependency version bump

2.3.0 - (March 14, 2018)
------------------
### Changed
* Minor dependency version bump

2.2.0 - (March 6, 2018)
------------------
### Added
* box-shadow CSS variable for list-item focus
* CSS variable for default list-item color

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
* Minor dependency version bump

1.19.0 - (January 18, 2018)
------------------
### Changed
* Add context to selectable list nightwatch example
* Move selectable functions to utils and convert to selectable list to functional component

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
### Fixed
* Chevron positioning

1.15.0 - (November 7, 2017)
------------------
### Changed
* Minor dependency version bump

1.14.0 - (October 31, 2017)
------------------
### Changed
* Minor dependency version bump

1.13.0 - (October 24, 2017)
------------------
### Changed
* Minor dependency version bump

1.12.0 - (October 6, 2017)
------------------
### Changed
* Update table test links to be 'Table Tests' and 'Single Select Table Links'
* Update list to use flex and column directional to update selection height

1.11.0 - (September 26, 2017)
------------------
### Removed
* Remove stylelint-disable selector-class-pattern

### Added
* SelectableList component

### Changed
* Update SingleSelectList and MultiSelectList components to use SelectableList

1.10.0 - (September 19, 2017)
------------------
### Changed
* Minor dependency version bump

1.9.0 - (September 12, 2017)
------------------
### Changed
* Update selection styles

1.8.0 - (September 7, 2017)
------------------
### Changed
* Minor dependency version bump

1.7.0 - (September 5, 2017)
------------------
### Changed
* Update nightwatch tests and test scripts.

1.6.0 - (August 31, 2017)
------------------
### Added
* Added styles to remove margin and padding from default list-item

1.5.0 - (August 15, 2017)
------------------
### Changed
* Switched CSS custom properties usage to inline fallback syntax

1.4.0 - (August 8, 2017)
------------------
### Changed
* Minor dependency version bump

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
* Added preventDefault to Single Select List and MultiSelect List

### Changed
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

1.0.0 - (June 28, 2017)
------------------
Initial stable release
