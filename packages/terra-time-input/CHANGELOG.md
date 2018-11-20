Changelog
=========

Unreleased
----------
### Changed
* Removed use of componentWillMount from examples

2.34.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.33.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.32.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.31.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

2.30.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

2.29.0 - (October 8, 2018)
------------------
### Changed
* Minor dependency version bump

2.28.0 - (October 2, 2018)
------------------
### Changed
* Minor dependency version bump

2.27.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

2.26.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

2.26.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.25.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump
* Border radius to use px

2.24.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

2.23.0 - (August 21, 2018)
------------------
### Changed
* Minor dependency version bump

2.22.0 - (August 8, 2018)
------------------
### Changed
* Updated component internationalization error message

2.21.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

2.20.0 - (July 25, 2018)
------------------
### Added
* Add sv and sv-SE translations

2.19.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)
* Replace legacy Input with the new terra-form-input package
* Give desktop time input the same styles as terra-form-input.

2.18.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

2.17.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

### Fixed
* Prevent modification of passed in attribute props.

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

2.14.0 - (June 12, 2018)
------------------
### Fixed
* Prevent focus events from causing runtime errors

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
* Replaced nightwatch tests with wdio

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
### Fixed
* Add missing eslint-disable-next-line no-console

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
### Added
* Translations for other locales

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16
* Uplifted component to use terra-button v2

### Added
* Added disabled prop

1.18.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.17.0 - (January 18, 2018)
------------------
### Changed
* Minor dependency version bump

1.16.0 - (January 5, 2018)
------------------
### Added
* Added variant prop to all for setting of 12 hour time input.
* Added support for theming.
* Added mobile only time input.

### Changed
* Turned placeholders into i18n Translations
* Updated tests to use aria-pressed instead of aria-selected for button group

1.15.0 - (November 28, 2017)
------------------
### Changed
* Removed onInputFocus prop and pass it down as a custom prop.

1.14.0 - (November 16, 2017)
------------------
### Added
* Added onInputFocus prop.

1.13.0 - (October 24, 2017)
------------------
### Added
* Added onBlur prop.

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
### Changed
* Minor dependency version bump

1.8.0 - (September 7, 2017)
------------------
### Fixed
* Focus management issue between hour and time input in Firefox.
* Border styling
* Input bidirectionality

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
### Fixed
* Fixed onChange callback to occur for onBlur or onKeyDown

1.1.0 - (July 18, 2017)
------------------
### Changed
* Converted component to use CSS modules
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

### Fixed
* Updated package.json to use rimraf

1.0.0 - (June 28, 2017)
------------------
Initial stable release
