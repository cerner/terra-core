ChangeLog
=========

Unreleased
----------

2.36.0 - (March 10, 2020)
------------------
### Changed
* Minor dependency version bump

2.35.0 - (February 18, 2020)
------------------
### Added
* Added clinical-lowlight-theme theming files

### Changed
* Update docs to use mdx syntax.

2.34.0 - (January 28, 2020)
------------------
### Changed
* Minor dependency version bump

2.33.0 - (January 7, 2020)
------------------
### Changed
* Minor dependency version bump

2.32.0 - (December 3, 2019)
------------------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.

2.31.0 - (October 30, 2019)
------------------
### Changed
* Duplicate IDs in example changed.

2.30.0 - (October 15, 2019)
------------------
### Changed
* Minor dependency version bump

2.29.0 - (October 14, 2019)
------------------
### Changed
* Minor dependency version bump

### Fixed
* File input to show selection in edge.

### Added
* File input example added.
* Added `isIncomplete` prop to show incomplete stylings.

2.28.0 - (October 3, 2019)
------------------
### Added
* Added `placeholder` as a first class property to `<Input />` and `<InputField />`

2.27.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency version bump

2.26.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.

2.25.0 - (September 6, 2019)
------------------
### Changed
* Updated examples to import from the expected package instead of relative paths

2.24.0 - (September 3, 2019)
------------------
### Fixed
* Fixed issue where using aria-label as a custom prop the `<Textarea />` component was not passing through correctly.

### Added
* Props table markdown file import added to doc site page
* Added `ariaLabel` prop to improve accessibility.

### Changed
* Import for package version from package.json added to doc page
* Switch from Object.assign to Object spread syntax.

2.23.0 - (August 21, 2019)
------------------
### Changed
* Import for package version from package.json added to doc page
* Switch from Object.assign to Object spread syntax.
* Cleaned up imports in examples and test files

2.22.0 - (August 14, 2019)
------------------
### Changed
* Minor dependency version bump

2.21.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump
* Updated errorIcon default prop from `Field.defaultProps.errorIcon` with `<IconError>` component.
* updated package.json test scripts

### Removed
* Removed explicit calls to set `caret-color` to `transparent` in WDIO tests

2.20.0 - (July 24, 2019)
------------------
### Changed
* Minor dependency version bump

2.19.0 - (July 17, 2019)
------------------
### Changed
* Revert replaced `Field.defaultProps.errorIcon` with `<IconError>` component.

2.18.0 - (July 17, 2019)
------------------
### Changed
* Replaced `Field.defaultProps.errorIcon` with `<IconError>` component.

2.17.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

2.16.0  - (July 11, 2019)
------------------
### Changed
* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`

2.15.0 - (June 28, 2019)
------------------
### Changed
* Minor dependency version bump

2.14.0 - (June 18, 2019)
------------------
### Changed
* Added `isInput` type on Input component to help with component identity

### Removed
* Removed stale WDIO screenshots

2.13.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore
* Removed vendor style rule added to fade placeholder text. Since Autoprefixer V9 resolves vendor prefix issue.

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

2.12.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump
* Updated WDIO tests to use themeCombinationOfCustomProperties instead of themeEachCustomProperty
* Added 'disabled' prop to InputField component

### Fixed
* Add vendor style rule for IE11 to fade placeholder text.

2.11.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

### Added
* Added type as first class prop to Form-Input-Field
* Added example of Number Input on for Form-Input

2.10.0 - (April 9, 2019)
------------------
### Changed
* Minor dependency version bump

2.9.0 - (April 2, 2019)
------------------
### Changed
* Minor dependency version bump

2.8.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

2.7.0 - (March 21, 2019)
------------------
### Added
* Added logic to enable accessible mapping of InputField and it's related error and help text messages

2.6.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

2.5.0 - (February 12, 2019)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency version bump

2.3.0 - (January 26, 2019)
------------------
### Changed
* Minor dependency version bump

2.2.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

2.1.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

2.0.0 - (January 8, 2019)
------------------
### Changed
* Updated theme variables

### Fixed
* Changed browser.execute function in wdio spec to be a string for IE and FF driver compatibility

1.32.0 - (January 2, 2019)
------------------
### Fixed
* Dev site tests pages adjusted to uniformly use caretColor

### Added
* Pattern prop added to Input component
* maxWidth prop added to pass through to terra-form-field

### Changed
* Minor dependency version bump
* Updated site examples to be more accessible.
* Note added regarding input types to pattern prop

1.31.1 - (November 20, 2018)
------------------
### Changed
* Patch dependency version bump

1.31.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Dev site test for maxWidth prop

1.30.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

1.29.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

1.28.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

1.27.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

1.26.0 - (October 8, 2018)
------------------
### Changed
* Minor dependency version bump

1.25.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

1.24.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

1.24.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

1.23.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump
* Border radius updated to use px

### Added
* Placeholder text styling
* Webdriver and dev site tests for disabled, placeholder, and value styling

1.22.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

1.21.0 - (August 8, 2018)
------------------
### Changed
* Minor dependency version bump

1.20.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.19.0 - (July 25, 2018)
------------------
### Changed
* Minor dependency version bump

1.18.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

1.17.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

1.16.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

1.15.0 - (July 3, 2018)
------------------
### Added
* Added a prop refCallback for passing refs to the dom input element

1.14.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

1.13.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

1.12.0 - (June 12, 2018)
------------------
### Changed
* Updated field documentation to be more inline with other examples
* Updated "test:jest" script to work on windows.

1.11.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

1.10.0 - (May 25, 2018)
------------------
### Changed
* Updated the README example code

1.9.0 - (May 23, 2018)
------------------
### Changed
* Minor dependency version bump

1.8.0 - (May 16, 2018)
------------------
### Changed
* Minor dependency version bump

1.7.0 - (May 9, 2018)
------------------
### Changed
* Minor dependency version bump

1.6.0 - (May 2, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added InputField to package

1.5.0 - (April 20, 2018)
------------------
### Changed
* Minor dependency version bump

1.4.0 - (April 15, 2018)
------------------
### Changed
* Minor dependency version bump

1.3.0 - (April 5, 2018)
------------------
### Changed
* Minor dependency version bump

1.2.0 - (March 30, 2018)
------------------
### Changed
* Minor dependency version bump

1.1.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

1.0.0 - (February 26, 2018)
------------------
* Initial stable release
