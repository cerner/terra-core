Changelog
=========

Unreleased
----------
### Changed
* Components updated to use `injectIntl` to interface with `react-intl's` `intl` context.
* Update jest test snanpshot
* Added markdown version of props table to package
* updated package.json test scripts

3.23.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump

3.22.0 - (July 24, 2019)
------------------
### Changed
* Minor dependency version bump

3.21.0 - (July 17, 2019)
------------------
### Changed
* Minor dependency version bump

3.20.0 - (July 17, 2019)
------------------
### Changed
* Minor dependency version bump

3.19.0 - (July 16, 2019)
------------------
### Changed
* Components updated to use `injectIntl` to interface with `react-intl's` `intl` context.
* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`
* Updated jest snapshots

### Added
* Added documentation on required peerDependencies

3.18.0  - (July 11, 2019)
------------------
### Changed
* Updated Docs around the requirement of terra-base and aggregate-translations.

3.17.0 - (July 9, 2019)
------------------
### Fixed
* Updated search field to pass event object to 'handleClear' from 'handleKeyDown'.

3.16.0 - (June 28, 2019)
------------------
### Fixed
* Update tolerance of search field tests to allow for slight differences in how the button icon is rendered

3.15.0 - (June 18, 2019)
------------------
### Changed
* Minor dependency bump

3.14.1 - (June 12, 2019)
------------------
### Changed
* Patch dependency version bump

3.14.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Clear button added to search field for cross-browser compatibility
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

3.13.0 - (May 14, 2019)
------------------
### Changed
* Added a doc site example with AutoFormat attributes disabled

3.12.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump

3.11.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

3.10.0 - (April 9, 2019)
------------------
### Changed
* Minor dependency version bump

3.9.0 - (April 2, 2019)
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
* Update Jest tests to use terra-enzyme-intl

3.6.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

### Added
* Added en-AU translations

### Fixed
* Changed browser.execute functions in wdio spec to be strings for IE and FF driver compatibility

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

2.37.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency version bump
* Set the input cursor to be transparent for wdio tests

2.36.1 - (November 20, 2018)
------------------
### Changed
* Patch dependency version bump

2.36.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.35.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.34.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.33.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

2.32.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

2.31.0 - (October 8, 2018)
------------------
### Changed
* Minor dependency version bump

2.30.0 - (October 2, 2018)
------------------
### Changed
* Minor dependency version bump

2.29.0 - (September 25, 2018)
------------------
### Added
* Added new prop to pass down custom props to input

2.28.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

2.28.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.27.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

2.26.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

2.25.0 - (August 21, 2018)
------------------
### Changed
* Minor dependency version bump

2.24.0 - (August 8, 2018)
------------------
### Changed
* Updated component internationalization error message

2.23.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump
* Changed input to have right border

2.22.0 - (July 26, 2018)
------------------
### Added
* Add inputRefCallback prop

2.21.0 - (July 25, 2018)
------------------
### Added
* Add sv and sv-SE translations

2.20.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

2.19.0 - (July 17, 2018)
------------------
### Added
* Added more themeable variables

### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

2.18.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

2.17.0 - (July 3, 2018)
------------------
### Changed
* Replace legacy Input with the new terra-form-input package

2.16.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump
* Added clickable text to a few test pages

### Added
* Added change log to the documentation on terra-dev-site

### Removed
* Removed a duplicate test page for Search Fields with Placeholders

2.15.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

2.14.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.
* Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.

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
### Changed
* Minor dependency version bump

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
* Uplifted component to use terra-button v2

### Fixed
* Fixed error when handle search with a null searchText.

1.20.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

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
* Add ability to default value and onChange function handler
* Add ability to disable and stretch to fill its container
* Add ability to disable the auto searching and trigger searching via ENTER key

1.16.0 - (November 16, 2017)
------------------
### Changed
* Minor dependency version bump

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
* Minor dependency version bump

1.11.0 - (September 26, 2017)
------------------
### Removed
* Remove stylelint-disable selector-class-pattern

1.10.0 - (September 19, 2017)
------------------
### Changed
* Minor dependency version bump

1.9.0 - (September 12, 2017)
------------------
### Fixed
* Fixed search input rendering on Mobile Safari.

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
### Changed
* Minor dependency version bump

1.5.0 - (August 15, 2017)
------------------
### Changed
* Minor dependency version bump

1.4.0 - (August 8, 2017)
------------------
### Changed
* Minor dependency version bump

1.3.0 - (August 1, 2017)
------------------
### Changed
* Minor dependency version bump

1.2.0 - (July 26, 2017)
------------------
### Added
* Added onInvalidSearch callback for invalid search text entry.

1.1.0 - (July 18, 2017)
------------------
### Changed
* Converted component to use CSS modules
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

1.0.0 - (June 28, 2017)
------------------
Initial stable release
