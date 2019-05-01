ChangeLog
=========

Unreleased
----------

2.9.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump
* Updated version of react-syntax-highlighter

2.8.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

2.7.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

2.6.0 - (March 21, 2019)
------------------
### Changed
* Minor dependency version bump

2.5.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (February 12, 2019)
------------------
### Changed
* Add overflow style hidden to prevent incorrect size calculation.

2.3.0 - (February 5, 2019)
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

1.23.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency version bump

1.22.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

1.21.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

1.20.0 - (November 9, 2018)
------------------
### Changed
* Fixed lint errors

1.19.0 - (October 24, 2018)
------------------
### Changed
* Set language on syntax highlight to JSX to improve highlighting
* Improved syntax highlighter theme - based on ReactJS.org syntax highlighter theme
* Added aria-hidden to code examples to hide code from screen readers when closed
* Improve doc example styling to be more usable in theme repos

### Added
* Created placeholder component for documentation.

1.18.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

1.17.0 - (October 8, 2018)
------------------
### Changed
* Updated react-syntax-highlighter version to ^8

1.16.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

1.15.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

1.15.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2
* Expose propsResolution prop in propTable via doc-template component

1.14.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

1.13.0 - (August 29, 2018)
------------------
### Added
* Added support for rendering custom content in doc template via children API

### Changed
* Switched badge services for npm version display
* Minor dependency version bump

1.12.0 - (August 1, 2018)
------------------
### Fixed
* Fixed styles not being applied to the Examples header

1.11.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

1.10.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

1.9.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

1.8.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

1.7.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

1.6.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.

1.5.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

1.4.0 - (May 25, 2018)
------------------
### Fixed
* Update example header to display the singular or pluralized form of example (Example or Examples)

1.3.0 - (May 23, 2018)
------------------
### Changed
* Added a visible CSS layout
* Removed terra-toggle-button as a dependency

### Fixed
* Use https to get the shield

1.2.0 - (May 16, 2018)
------------------
### Changed
* Add 15px padding to template
* Limit syntax hilighting support to jsx only to limit package size.
* Open up description prop to accept node

### Fixed
* Fix example template to only display example source code toggle when source code is provided

1.1.0 - (May 9, 2018)
------------------
### Changed
* Add syntax highlighting to source code examples
* Add a link to the component's source code

### Fixed
* Update hash key reference in render to match the defined key in the propsTables prop

1.0.0 - (May 2, 2018)
------------------
* Initial stable release
