Changelog
=========

Unreleased
----------

2.29.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

### Changed
* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`

2.28.0 - (June 28, 2019)
------------------
### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.

2.27.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

2.26.0 - (May 1, 2019)
------------------
### Changed
* Update markdown text color to inherit parent color
* Update markdown code elements to use hard-code text color to go with hard-coded background-color

2.25.0 - (April 16, 2019)
------------------
### Added
* baseUrl prop
* hasHeadingAnchors prop
* regression test for a greater set of markdown

### Removed
* github-markdown-css dependency

### Changed
* Provide no highlighting for unsupported languages instead of the clike highlighting.

2.24.0 - (March 26, 2019)
------------------
### Changed
* Added Prismjs highlighting for code blocks
* Update react/react-dom peer-dependency to latest stable minor release

2.23.0 - (March 21, 2019)
------------------
### Changed
* Minor dependency version bump

2.22.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump
* Add styles to increase text contrast for block quotes

2.21.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency version bump

2.20.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

2.19.0 - (January 8, 2019)
------------------
### Changed
* Minor dependency version bump

2.18.0 - (January 2, 2019)
------------------
### Changed
* Updated code blocks to have sufficient color contrast
* Updated markdown headers to not have generated ids, preventing duplicated ids in change logs

2.17.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.16.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.15.0 - (October 8, 2018)
------------------
### Changed
* Updated links in docs on supported features

2.14.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.13.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump
* Updated marked dependency to 0.5.0 (current stable release)

2.12.0 - (July 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.11.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

### Fixed
* Removed usage of CSS `initial` value because Internet Explorer does not support it

2.10.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

2.9.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.

2.8.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

2.5.0 - (May 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (May 2, 2018)
------------------
### Changed
* Minor dependency version bump

2.3.0 - (April 20, 2018)
------------------
### Changed
* Import css file inside github-markdown-css instead of importing package.

2.2.0 - (March 30, 2018)
------------------
### Changed
* Minor dependency version bump

2.1.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16

1.12.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.11.0 - (January 18, 2018)
------------------
### Changed
* Minor dependency version bump

1.10.0 - (October 6, 2017)
------------------
### Changed
* Minor dependency version bump

1.9.0 - (September 26, 2017)
------------------
### Removed
* Remove stylelint-disable selector-class-pattern

1.8.0 - (September 19, 2017)
------------------
### Changed
* Minor dependency version bump

1.6.0 - (September 12, 2017)
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
### Changed
* Added margin to body

### Added
* Added nightwatch tests

1.1.0 - (July 18, 2017)
------------------
### Changed
* Minor dependency version bump

1.0.0 - (June 28, 2017)
------------------
Initial stable release
