Changelog
=========

Unreleased
----------

2.7.0 - (November 16, 2017)
------------------
### Changed
* Minor version bump

2.6.0 - (October 6, 2017)
------------------
### Changed
* Updated parameters passed to component while rendering and also the test scripts.

2.5.0 - (September 26, 2017)
------------------
### Changed
* Updated body height to default to 100% instead of auto while updating the terra-consumer theme to be auto.

2.4.0 - (September 19, 2017)
------------------
### Changed
* Minor version bump

2.3.0 - (September 12, 2017)
------------------
### Changed
* Minor version bump

2.2.0 - (September 7, 2017)
------------------
### Changed
* Minor version bump

2.1.0 - (September 5, 2017)
------------------
### Changed
* Update nightwatch tests and test scripts.

2.0.0 - (August 31, 2017)
------------------
### Breaking Changes
* Changed default `body` global line-height from `1` to `1.4285714285714286` to better align with legacy codebases
* Set `height` to `auto` on body element by default
* Removed global border, margin, and padding resets from base styles
* Removed global list-style reset from `ol` and `ul` elements

### Added
* Added `--terra-base-line-height` CSS custom property
* Added `--terra-base-html-height` CSS custom property
* Added `--terra-base-html-margin` CSS custom property
* Added `--terra-base-body-height` CSS custom property
* Added `--terra-base-body-margin` CSS custom property

1.4.0 - (August 15, 2017)
------------------
### Changed
* Switched CSS custom properties usage to inline fallback syntax

1.3.0 - (August 8, 2017)
------------------
### Changed
* Minor version bump

1.2.0 - (August 1, 2017)
------------------
### Changed
* Minor version bump

1.1.0 - (July 18, 2017)
------------------
### Changed
* Converted component to use CSS modules
* Converted SCSS variables to CSS custom properties for theming
* Normalized CSS custom properties naming
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

1.0.0 - (June 28, 2017)
------------------
Initial stable release
