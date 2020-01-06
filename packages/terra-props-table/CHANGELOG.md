Changelog
=========

Unreleased
----------
### Removed
* Removed yarn reference in docs

2.43.0 - (December 3, 2019)
------------------
### Added
* Added reference wdio screenshots for "orion-fusion-theme".

2.42.0 - (October 30, 2019)
------------------
### Fixed
* Fixed lint warnings for multiple empty lines

2.41.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.

2.40.0 - (September 6, 2019)
------------------
### Added
* Props table markdown file import added to doc site page

2.39.0 - (August 21, 2019)
--------------------------
### Changed
* Cleaned up imports in examples and test files
* Added comments for ESlint v6
* updated package.json test scripts

2.37.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump

2.36.0 - (July 24, 2019)
------------------
### Changed
* Minor dependency version bump

2.35.0 - (July 16, 2019)
------------------
### Changed
* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`

### Added
* Added documentation on required peerDependencies

2.32.0 - (June 28, 2019)
------------------
### Changed
* Minor dependency version bump

2.31.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

2.30.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump
* Update markdown text color to inherit parent color
* Update markdown code elements to use hard-code text color to go with hard-coded background-color

2.29.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

### Removed
* github-markdown-css dependency

### Fixed
* Props with custom prop types (like intlShape) now show as required if marked as such

2.28.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

2.27.0 - (March 21, 2019)
------------------
### Changed
* Minor dependency version bump

2.26.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

2.25.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

2.24.0 - (January 8, 2019)
------------------
### Added
* Added support for private props suppression in PropsTable output.

2.23.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency version bump

2.22.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.21.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.20.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

2.19.0 - (October 8, 2018)
------------------
### Changed
* Minor dependency version bump

2.18.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

2.17.1 - (September 6, 2018)
------------------
### Fixed
* Fixed bug where props-table eagerly parsed component source code

2.17.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.16.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump
* Added a new prop, `propsResolution` to allow users to opt-in to react-docgen's findAllComponentDefinitions prop-type resolution.

2.15.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump
* Updated `react-docgen` parse function to handle multiple exports
* Dropped dependency on lodash/uniq and replaced with vanilla JavaScript

2.14.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

2.13.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

### Removed
* Implicit inferring of an `enum`'s type based on its first child.

2.12.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

2.11.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

2.10.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.

2.9.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

2.7.0 - (May 23, 2018)
------------------
### Changed
* Minor dependency version bump

2.6.0 - (May 2, 2018)
------------------
### Changed
* Minor dependency version bump

2.5.0 - (April 20, 2018)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (April 15, 2018)
------------------
### Changed
* Fixed code blocks in the Description column not line wrapping

2.3.0 - (March 30, 2018)
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
* Added styling to wrap long prop-type 'type' entries
* Aligned Props Table entries to the top of their rows

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16

1.11.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.10.0 - (January 18, 2018)
------------------
### Changed
* Force JSON.stringify to output with no spaces.

1.9.0 - (October 6, 2017)
------------------
### Changed
Added pre tag to display objects in proper code syntax.

1.8.0 - (September 26, 2017)
------------------
### Changed
* Minor dependency version bump

1.7.0 - (September 19, 2017)
------------------
### Changed
* Minor dependency version bump

1.6.0 - (September 7, 2017)
------------------
### Changed
* Minor dependency version bump

1.5.0 - (September 5, 2017)
------------------
### Changed
* Update nightwatch tests and test scripts.

1.4.0 - (August 31, 2017)
------------------
### Changed
* Minor dependency version bump

1.3.0 - (August 8, 2017)
------------------
### Changed
* Minor dependency version bump

1.2.0 - (August 1, 2017)
------------------
### Added
* Input propType checked to output the specifics of arrayOf, shape and oneOfType types.
* Add component string prop to render component name in header

1.1.0 - (July 18, 2017)
------------------
### Fixed
* Numeric prop-types no longer display as string

1.0.0 - (June 28, 2017)
------------------
Initial stable release
