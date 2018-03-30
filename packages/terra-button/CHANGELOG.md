Changelog
=========

Unreleased
----------

2.4.0 - (March 30, 2018)
------------------
### Changed
* Minor version bump

2.3.0 - (March 14, 2018)
------------------
### Changed
* Create a flattened SVG css selector.

2.2.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

2.1.0 - (February 26, 2018)
------------------
### Changed
* Added font-size theming variable to Button component
* Corrected `DE-EMPHSASIS` button variant typo

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 23, 2018)
----------
### Changed
* Updated button types and variants syntax in docs

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16
* The `text` prop is now required to help improve accessibility
* Button is now a class-base component and not a functional component, to allow a ref callback

### Added
* The following props have been added: `isIconOnly`, `onBlur`, `onFocus`, `onKeyDown`, and `onKeyUp`
* The following variants have been added: `neutral`,  `emphasis`, `de-emphasis`, `utility` and `action` per UX guidance

### Removed
* The size prop has been removed per UX guidance
* The `primary`, `secondary`,  and `link` variants have been removed per UX guidance
* The children prop has been removed

1.14.0 - (November 28, 2017)
------------------
### Changed
* Corrected typo in `terra-button` css comment.

1.13.0 - (November 16, 2017)
------------------
### Changed
* Removed unnecessary `font-family` rule.

1.12.0 - (October 31, 2017)
------------------
### Changed
* Added space between icons and text

1.11.0 - (October 6, 2017)
------------------
### Changed
* Minor version bump

1.10.0 - (September 26, 2017)
------------------
### Removed
* Remove stylelint-disable selector-class-pattern

1.9.0 - (September 19, 2017)
------------------
### Changed
* Minor version bump

1.8.0 - (September 12, 2017)
------------------
### Changed
* Minor version bump

1.7.0 - (September 7, 2017)
------------------
### Changed
* Minor version bump

1.6.0 - (September 5, 2017)
------------------
### Changed
* Update nightwatch tests and test scripts.

1.5.0 - (August 31, 2017)
------------------
### Changed
* Minor version bump

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
### Removed
* Removed terra-mixins

1.1.0 - (July 18, 2017)
-----------------------
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
