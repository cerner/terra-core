ChangeLog
=========

Unreleased
----------
### Added
* Added clinical-lowlight-theme and generated the respective reference wdio screenshots.

2.25.0 - (December 3, 2019)
------------------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.

2.24.0 - (November 12, 2019)
------------------
### Changed
* Changed how cursor looks on specific hyperlinks(ex: a default cursor instead of text selector on disabled hyperlink).
* Switched themeable icons provided by CSS to imported `terra-icon` component.

2.23.0 - (November 7, 2019)
------------------
### Fixed
* Fixed the color contrast axe violation for disabled hyperlinks by adding `aria-disabled`.

2.22.0 - (October 30, 2019)
------------------
### Changed
* Minor dependency version bump

2.21.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency version bump

2.20.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.

2.19.0 - (September 6, 2019)
------------------
### Added
* Props table markdown file import added to doc site page

2.18.0 - (September 3, 2019)
------------------
### Changed
* Updated the 'keycode-js' version from '^1.0.4' to '^2.0.1'.

2.17.0 - (August 21, 2019)
------------------
### Changed
* Import for package version from package.json added to doc page
* Cleaned up imports in examples and test files

2.16.0 - (August 14, 2019)
------------------
### Changed
* updated package.json test scripts

2.15.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump

2.14.0 - (July 24, 2019)
------------------
### Changed
* Minor dependency version bump

2.13.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

2.12.0  - (July 11, 2019)
------------------
### Changed
* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`

2.11.0 - (June 28, 2019)
------------------
### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.

2.10.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

2.9.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump

### Changed
* Updated WDIO tests to use themeCombinationOfCustomProperties instead of themeEachCustomProperty

2.8.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

2.7.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

2.6.0 - (March 21, 2019)
------------------
### Changed
* Replaced local keyCode values with keycode-js npm package

2.5.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (February 12, 2019)
------------------
### Changed
* Minor dependency version bump

2.3.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency version bump

2.2.0 - (January 22, 2019)
------------------
### Changed
* Updated theme variables

2.1.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

2.0.0 - (January 8, 2019)
------------------
### Changed
* Updated theme variables
* Refactor icons to consistently use background-image instead of background

1.19.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency version bump

1.18.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

1.17.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

1.16.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

1.15.0 - (October 30, 2018)
------------------
### Changed
* Update mixin import to be more explicit

1.14.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

1.13.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

1.12.0 - (October 8, 2018)
------------------
### Changed
* Minor dependency version bump

1.11.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

1.10.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

1.10.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

1.9.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

1.8.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

1.7.0 - (August 21, 2018)
------------------
### Changed
* Minor dependency version bump

1.6.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.5.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

1.4.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update
* Removed unused state mouseWasClicked key

1.3.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

1.2.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

1.1.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

1.0.0 - (June 13, 2018)
------------------
* Initial stable release
