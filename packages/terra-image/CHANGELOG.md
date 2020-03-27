ChangeLog
=========

Unreleased
----------

3.25.0 - (March 10, 2020)
------------------
### Fixed
* Fixed inconsistent behavior of `object-fit` prop in IE by calling the `objectFitImages` API in `componentDidUpdate`.

3.24.0 - (February 25, 2020)
------------------
### Changed
* Update docs to use mdx syntax.

3.23.0 - (February 18, 2020)
------------------
### Added
* Added clinical-lowlight-theme theming files

3.22.0 - (January 7, 2020)
------------------
### Removed
* Removed yarn reference in docs

3.21.0 - (December 3, 2019)
------------------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.

### Fixed
* One request made instead of two when image is rendered with a placeholder.

3.20.0 - (October 30, 2019)
------------------
### Changed
* Added missing alternative text for example.

3.19.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency version bump

3.18.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.

3.17.0 - (September 6, 2019)
------------------
### Added
* Props table markdown file import added to doc site page

3.16.0 - (August 21, 2019)
------------------
### Changed
* Import for package version from package.json added to doc page
* Added comments for ESlint v6
* Cleaned up imports in examples and test files

3.15.0 - (August 14, 2019)
------------------
### Changed
* updated package.json test scripts

3.14.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump

3.13.0 - (July 24, 2019)
------------------
### Changed
* Minor dependency version bump

3.12.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies
* Added `Object-fit-images` polyfill for IE.
* Added `object-fit` property in css.
* Added prop Fit.
* Added examples using Fit.

### Changed
* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`

3.11.0  - (July 11, 2019)
------------------
### Changed
* Minor dependency version bump

3.10.0 - (June 28, 2019)
------------------
### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.

3.9.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

3.8.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump

3.7.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

3.6.0 - (April 2, 2019)
------------------
### Changed
* Fixed alt text in invalid src prop example

3.5.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release
* Added alt text to doc example images

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

3.4.0 - (March 21, 2019)
------------------
### Changed
* Minor dependency version bump

3.3.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

3.2.0 - (February 12, 2019)
------------------
### Changed
* Minor dependency version bump

3.1.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency version bump

3.0.0 - (January 22, 2019)
------------------
### Changed
* Updated theme variables

2.32.0 - (January 22, 2019)
------------------
### Changed
* Updated dependencies to fix major version bump issues

2.31.0 - (January 8, 2019)
------------------
### Changed
* Minor dependency version bump

2.30.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency version bump
* Removed use of componentWillReceiveProps

2.29.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.28.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.27.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.26.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

2.25.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

### Fixed
* Fix flickering on new props #1748
* Corrected example in docs/README.md

2.24.0 - (October 8, 2018)
------------------
### Changed
* Minor dependency version bump

2.23.0 - (October 2, 2018)
------------------
### Added
* Export for image variant added

2.22.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

2.21.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

2.21.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.20.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

2.19.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

2.18.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

2.17.0 - (July 19, 2018)
------------------
### Changed
* Required alt prop now has a default prop equal to an empty string
* Add .module extension to SCSS file(s)

2.16.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update
* Required props no longer set a default prop

2.15.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

2.14.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

2.13.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

2.12.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.

2.11.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

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

### Changed
* Changed default display for image to `inline-block`

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

1.16.0 - (February 1, 2018)
------------------
### Changed
* Add code usage example to README.md

1.15.0 - (January 18, 2018)
------------------
### Changed
* Implemented placeholder image for loading and error views

1.14.0 - (January 5, 2018)
------------------
### Changed
* Minor dependency version bump

1.13.0 - (November 28, 2017)
------------------
### Changed
* Minor dependency version bump

1.12.0 - (November 16, 2017)
------------------
### Changed
* Minor dependency version bump

1.11.0 - (October 6, 2017)
------------------
### Changed
* Minor dependency version bump

1.10.0 - (September 26, 2017)
------------------
### Removed
* Remove stylelint-disable selector-class-pattern

1.9.0 - (September 19, 2017)
------------------
### Changed
* Minor dependency version bump

1.8.0 - (September 12, 2017)
------------------
### Changed
* Minor dependency version bump

1.7.0 - (September 7, 2017)
------------------
### Changed
* Minor dependency version bump

1.6.0 - (September 5, 2017)
------------------
### Changed
* Update nightwatch tests and test scripts.

1.5.0 - (August 31, 2017)
------------------
### Added
* Added default border, margin, and padding reset to img

1.4.0 - (August 15, 2017)
------------------
### Changed
* Switched CSS custom properties usage to inline fallback syntax

1.3.0 - (August 8, 2017)
------------------
### Changed
* Minor dependency version bump

1.2.0 - (August 1, 2017)
------------------
### Changed
* Converted component to use CSS modules
* Converted SCSS variables to CSS custom properties for theming

1.1.0 - (July 18, 2017)
------------------
### Changed
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

1.0.0 - (June 28, 2017)
------------------
Initial stable release
