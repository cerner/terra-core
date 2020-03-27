ChangeLog
=========

Unreleased
----------

4.19.0 - (March 10, 2020)
------------------
### Changed
* Update docs to use mdx syntax.

4.18.0 - (February 18, 2020)
------------------
### Added
* Added clinical-lowlight-theme theming files

4.17.0 - (February 13, 2020)
------------------
### Changed
* Minor dependency version bump

4.16.0 - (February 4, 2020)
------------------
### Changed
* Minor dependency version bump

4.15.0 - (January 28, 2020)
------------------
### Changed
* Minor dependency version bump

4.14.0 - (January 7, 2020)
------------------
### Removed
* Removed yarn reference in docs

### Changed
* Replaced css grid with flex-box

4.13.0 - (December 10, 2019)
------------------
### Changed
* Update jest test snapshot
* `<div>` tag replaced with `<p>` in message and title section to suffice accessibility.

4.12.0 - (December 3, 2019)
------------------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.

4.11.0 - (October 30, 2019)
------------------
### Changed
* `aria-label` added in example.

4.10.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency version bump

4.9.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.

### Added
* Added en-CA translations.

4.8.0 - (September 6, 2019)
------------------
### Added
* Props table markdown file import added to doc site page

4.7.0 - (September 3, 2019)
------------------
### Changed
* Minor dependency version bump

4.6.0 - (August 21, 2019)
------------------
### Changed
* Import for package version from package.json added to doc page
* Cleaned up imports in examples and test files

4.5.0 - (August 14, 2019)
------------------
### Changed
* Update jest test snapshot
* updated package.json test scripts

4.4.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump

4.3.0 - (July 24, 2019)
------------------
### Changed
* Minor dependency version bump

4.2.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

### Changed
* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`

4.1.0  - (July 11, 2019)
------------------
### Changed
* Updated Docs around the requirement of terra-base and aggregate-translations.

4.0.0 - (June 28, 2019)
------------------
### Breaking
* Removed children prop. Replaced with buttonAttrs prop
* Removed the default of rendering an error view
* Removed the custom variant
* Removed hide glyph logic based on available container space
* Removed onComponentMount logic to calculate padding
* Removed StatusView.Opts object and export
* Use CSS grid to center component
* Render divider if title and message/buttons exist

### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.
* Remove incorrect entry in upgrade guide that specifies new margin-bottom theme variable.

3.16.0 - (June 18, 2019)
------------------
### Changed
* Minor dependency bump

3.15.1 - (June 12, 2019)
------------------
### Changed
* Patch dependency version bump

3.15.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

3.14.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump

3.13.0 - (April 18, 2019)
------------------
### Deprecated
* StatusView.Opts object and export

### Added
* Added named StatusViewVariants export

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
* Update Jest tests to use terra-enzyme-intl

### Fixed
* Remove --terra-view-message-text-align theme variable to fix alignment within Edge browser.

3.7.0 - (March 5, 2019)
------------------
### Fixed
* Update SVG style to `display: block` to fix SVG size and stop text from shifting downards.

3.6.0 - (February 26, 2019)
------------------
### Added
* Added en-AU translations

### Changed
* Minor dependency version bump
* Update Thin Constraint test screenshot to be limited to the test size 75px to remove wdio screen resizing. Screen resizing to 75px is not possible with firefox driver.

### Fixed
* Status View glyph does not always displays when it should

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

2.36.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency version bump
* Removed use of componentWillMount from examples
* Added code sample display to the doc site examples
* Updated site examples to be more accessible.


2.35.1 - (November 20, 2018)
------------------
### Changed
* Patch dependency version bump

2.35.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.34.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.33.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.32.0 - (October 30, 2018)
------------------
### Changed
* Update mixin import to be more explicit

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
* Fixed words being unnecessarily broken
* Removed usage of CSS `initial` value because Internet Explorer does not support it

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
* Refactored classnames that contain 'status-view'

2.14.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.
* Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.

### Fixed
* Fixed text and glyphs being able to overflow out of the Status View

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

1.1.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.0.0 - (January 18, 2018)
------------------
* Initial stable release
