ChangeLog
=========

Unreleased
----------

3.23.0 - (October 30, 2019)
------------------
### Fixed
* Fixed lint warnings for multiple empty lines

3.22.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency version bump

3.21.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.

### Added
* Added en-CA translations.

3.20.0 - (September 6, 2019)
------------------
### Changed
* Minor dependency version bump

3.19.0 - (September 3, 2019)
------------------
### Added
* Props table markdown file import added to doc site page
* Added ThemeIconTemplate to support tooltip for theme icons
* Added Translations for IconConsultInstructionsForUse tooltip text

### Changed
* Import for package version from package.json added to doc page

3.18.0 - (August 21, 2019)
------------------
### Changed
* Import for package version from package.json added to doc page
* Switch from Object.assign to Object spread syntax.
* Cleaned up imports in examples and test files

### Fixed
* Fixed bi-directionality when `isBidi` is explicitly set.

3.17.0 - (August 14, 2019)
------------------
### Added
* Added new icon `IconCircleSymbolLight`
* Added new icon `IconDiamondSymbolLight`
* Added new icon `IconPlusSymbolLight`
* Added new icon `IconRectangleSymbolLight`
* Added new icon `IconSquareSymbolLight`
* Added new icon `IconTeardropSymbolLight`
* Added new icon `IconTeardropUpSymbolLight`
* Added new icon `IconThinDiamondSymbolLight`
* Added new icon `IconTriangleDownSymbolLight`
* Added new icon `IconTriangleSymbolLight`
* Added new icon `IconXSymbolLight`

### Changed
* updated package.json test scripts
* Consume one-cerner-style-icons v1.27

3.16.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump

3.15.0 - (July 24, 2019)
------------------
### Changed
* Minor dependency version bump

3.14.0 - (July 16, 2019)
------------------
### Added
* Added new icon `IconCeMarking`
* Added new icon `IconEcRep`
* Added new icon `IconEnvelopeFill`
* Added new icon `IconFeaturedOutlineYellow`
* Added new icon `IconOutOfNetwork`
* Added new icon `IconPharmacyVerification`
* Added new icon `IconRefusedSlot`

### Changed
* Consume one-cerner-style-icons v1.26
* Added documentation on required peerDependencies

### Changed
* Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`

3.13.0  - (July 11, 2019)
------------------
### Changed
* Minor dependency version bump

3.12.0 - (June 28, 2019)
------------------
### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.

3.11.0 - (June 18, 2019)
------------------
### Added
* Added `--terra-icon-abnormal-low-light-path-1-fill` variable in IconAbnormalLowLight.module.scss
* Added new icon `IconDocumentPlus`
* Added new icon `IconExtensions`
* Added new icon `IconNotificationDisabled`

### Changed
* IconAbnormalLowLight inline style moved to scss file
* Updated csvtojson devdependency to v2.0.8
* Updated jsdom devdependency to v15.1.1
* Updated svgo devdependecy to v1.2.2
* Updated one-cerner-style-icons devdependency to v1.23.0
* Updated `compilescripts` syntax in package.json
* Updated all icon test page to include new icons from one-cerner-style-icons uplift
* `IconCritical` fill style updated in one-cerner-style-icons uplift
* `IconDoNotDisturb` fill style updated in one-cerner-style-icons uplift
* Updated `IconExports.js` to include new icons

3.10.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

3.9.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump

### Added
* Doc site test page for all icons

3.8.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

3.7.0 - (April 9, 2019)
------------------
### Added
* IconCatalogueNumber
* IconCaution
* IconCircleLinesSymbol
* IconConsultInstructionsForUse
* IconDateOfManufacture
* IconManufacturer
* IconRedo
* IconUndo

### Changed
* Updated to one-cerner-style-icons v1.21.1
* Replaced 'Reload' icon with 'Undo` icon.
* `Reload` icon is now deprecated and will be removed in a future major version bump release.
* Updated SVG for IconSortAscending
* Updated SVG for IconSortDescending
* Added a new template to generate static color react icons
* Added CSS custom property based fill styles to static color icons

3.6.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

3.5.0 - (March 21, 2019)
------------------
### Changed
* Changed doc templates to render with HTML table instead of terra-table component

### Removed
* Removed terra-table dependency

3.4.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

3.3.0 - (February 12, 2019)
------------------
### Changed
* Minor dependency version bump

3.2.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency version bump

3.1.0 - (January 26, 2019)
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
* Moved keyframe animation styles out of CSS Modules parsing and into global styles written to the DOM with JS

### Fixed
* Lint Errors

2.29.1 - (November 20, 2018)
------------------
### Fixed
* Fixed broken keyframe animation

2.29.0 - (November 19, 2018)
------------------
### Fixed
* Fixed keyframe animation name hashing in webpacker environments

### Changed
* Added test page for Icon with aria-label component
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

2.24.0 - (October 8, 2018)
------------------
### Changed
* Updated to use one-cerner-style-icons 1.19.2

2.23.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

2.22.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

2.22.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.21.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

2.20.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

2.19.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

2.18.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

2.17.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

2.16.0 - (July 10, 2018)
------------------
### Changed
* Updated to use one-cerner-style-icons 1.19.1
* Minor dependency version bump

2.15.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

2.14.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

2.13.0 - (June 12, 2018)
------------------
### Changed
* Restored documentation pages for themable and static variants.
* Updated "test:jest" script to work on windows.

2.12.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

2.11.0 - (May 25, 2018)
------------------
### Changed
* Replaced nightwatch tests with wdio tests.

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
* High Icon
* Low Icon
* Bold the import statements on terra-icon site to make documentation more readable

### Added
* Bed Assigned Icon
* Bed Requested Icon
* Critical Inverse Icon
* Discharge Coming Due Icon
* Discharge Complete Icon
* Discharge Overdue Icon
* Error Dark Icon
* External Link Icon
* Flip Horizontal Icon
* Flip Vertical Icon
* High Inverse Icon
* Hold Icon
* Moderate Icon
* No Risk Icon
* Rotate Left Icon
* Rotate Right Icon

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16
* Changed focusable prop from a boolean to a string

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
* Minor dependency version bump

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
* Changed Reply All Icon

### Added
* Added Audio Icon
* Added Featured Off Icon
* Added Notification Off Icon
* Added Pause Icon
* Added Pin Diagonal Icon
* Added Pin Down Icon
* Added Pin Diagonal Icon
* Added Question Outline Icon

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
### Added
* Added compose icon.
* Added incomingCall icon.
* Added microphone icon.
* Added microphoneDisabled icon.
* Added missedCall icon.
* Added outgoingCall icon.
* Added phoneDown icon.
* Added question icon.
* Added swap icon.
* Added unexpected icon.
* Added unread icon.
* Added unspecified icon.
* Added videoCameraDisabled icon.

### Changed
* Changed path data for unavailable icon.

1.7.0 - (September 5, 2017)
------------------
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
### Changed
* Converted component to use CSS modules

1.1.0 - (July 18, 2017)
------------------
### Changed
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

1.0.0 - (June 28, 2017)
------------------
Initial stable release
