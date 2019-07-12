Changelog
=========

Unreleased
----------

3.19.0  - (July 11, 2019)
------------------
### Fixed
* Disabled document scroll if Overlay is not relative to the triggering container.

### Changed
* Updated Docs around the requirement of terra-base and aggregate-translations.

3.18.0 - (July 9, 2019)
------------------
### Fixed
* Added `data-overlay-count` attribute to root document when overlay is opened
* Added check for `data-modal-count` attribute on root document to track opening and closing of overlays and modals,
  to prevent the removal of the `inert` attribute from the root element if another overlay or abstract modal exists.
* Added Node.contains polyfill to better support IE 10 / IE 11

3.17.0 - (June 28, 2019)
------------------
### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.
* Removed conditional logic required to import wicg-inert polyfill

### Fixed
* Fixed freezing of Loading Overlay test pages by wrapping them in Overlay Containers.

3.16.0 - (June 18, 2019)
------------------
### Added
* Added missing WDIO screenshots

3.15.1 - (June 12, 2019)
------------------
### Changed
* Patch dependency version bump

3.15.0 - (June 11, 2019)
------------------
### Added
* Added check to only load inert polyfill if it is not already defined on the Element prototype

### Removed
* Removed node_modules from .npmignore

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5
* Update overlay-spec and screenshots

3.14.0 - (May 14, 2019)
------------------
### Changed
* Updated overlay to use WICG inert polyfill to handle focus management when overlay is open

3.13.0 - (May 9, 2019)
------------------
### Changed
* Upgrade focus-trap-react to version ^6.0.1
* Added wrapping div to account for breaking change in focus-trap-react

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

3.8.1 - (March 27, 2019)
------------------
### Changed
* Changed default rootProp value to `#root`

3.8.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

3.7.0 - (March 21, 2019)
------------------
### Added
* Added overlay prop to OverlayContainer to separate overlay from container-content
* Added condition in overlay setNode method to prevent screen reader from reading container-content

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
* Changed expected selenium driver error to be non-Chrome specific for IE and FF driver compatibility

3.5.0 - (February 12, 2019)
------------------
### Changed
* Minor dependency version bump

3.4.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency version bump

### Changed
* Removed stylelint overrides in Overlay.module.scss

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

### Added
* Added missing ar translations.

2.36.1 - (November 20, 2018)
------------------
### Changed
* Patch dependency version bump

2.36.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.35.0 - (November 14, 2018)
------------------
### Changed
* Removed automatic focus shift to relative overlay when it is displayed

2.34.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.33.0 - (November 9, 2018)
------------------
### Fixed
* LoadingOverlay Opts includes zIndexes

2.32.0 - (October 30, 2018)
------------------
### Fixed
* Fixed issue where body scrolling is not restored on unmount.

### Changed
* Updated overlay to be portalled

### Added
* Added hidden div to catch scrolling behind Overlay
* zIndex prop

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
* Upgrade focus-trap-react to ^4.0.1

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

2.22.1 - (August 14, 2018)
------------------
### Changed
* Updated backgroundStyle documentation

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
* Updated README example code documentation

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
* Updated to add user defined class along with default class on DOM element rendered by OverlayContainer.

2.2.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

2.1.0 - (February 26, 2018)
------------------
### Changed
* Added theming variables in Overlay

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16

1.17.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.16.0 - (January 18, 2018)
------------------
### Changed
* Minor dependency version bump

1.15.0 - (January 5, 2018)
------------------
### Changed
* Export overlay container

1.14.0 - (November 28, 2017)
------------------
### Changed
* Minor dependency version bump

1.13.0 - (November 16, 2017)
------------------
### Changed
* Minor dependency version bump

1.12.0 - (November 7, 2017)
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
### Changed
* Minor dependency version bump

1.4.0 - (August 15, 2017)
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
* Updated example code in overlay documentation

1.1.0 - (July 26, 2017)
------------------
### Changed
* Minor dependency version bump

1.0.0 - (July 18, 2017)
------------------
Initial stable release
