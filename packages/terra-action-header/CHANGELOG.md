ChangeLog
=========

Unreleased
----------
### Changed
* Removed --terra-action-header-icon-top variable, added --terra-action-header-icon-ms-top variable to only apply top styling in Microsoft browsers.

2.26.0 - (August 21, 2019)
------------------
### Changed
* Import for package version from package.json added to doc page
* Cleaned up imports in examples and test files

2.25.0 - (August 14, 2019)
------------------
### Changed
* Components updated to use `FormattedMessage` to interface with `react-intl's` `intl` context.
* updated package.json test scripts

2.24.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump

2.23.0 - (July 24, 2019)
------------------
### Added
* Added documentation that maximize/minimize buttons will not be shown with the back button

2.22.0 - (July 17, 2019)
------------------
### Changed
* Revert components updated to use `injectIntl` to interface with `react-intl's` `intl` context.

2.21.0 - (July 17, 2019)
------------------
### Changed
* Components updated to use `injectIntl` to interface with `react-intl's` `intl` context.

2.20.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

2.19.0  - (July 11, 2019)
------------------
### Changed
* Updated Docs around the requirement of terra-base and aggregate-translations.

2.18.0 - (July 9, 2019)
------------------
### Changed
* Update tests to use `Terra.describeViewports` for setting viewports

2.17.0 - (June 28, 2019)
------------------
### Added
* Added `--terra-action-header-back-background-image` variable in ActionHeader.module.scss
* Added `--terra-action-header-close-background-image` variable in ActionHeader.module.scss
* Added `--terra-action-header-maximize-background-image` variable in ActionHeader.module.scss
* Added `--terra-action-header-minimize-background-image` variable in ActionHeader.module.scss
* Added `--terra-action-header-previous-background-image` variable in ActionHeader.module.scss
* Added `--terra-action-header-next-background-image` variable in ActionHeader.module.scss

### Removed
* Removed `--terra-action-header-back-background` variable in ActionHeader.module.scss
* Removed `--terra-action-header-close-background` variable in ActionHeader.module.scss
* Removed `--terra-action-header-maximize-background` variable in ActionHeader.module.scss
* Removed `--terra-action-header-minimize-background` variable in ActionHeader.module.scss
* Removed `--terra-action-header-previous-background` variable in ActionHeader.module.scss
* Removed `--terra-action-header-next-background` variable in ActionHeader.module.scss

2.16.0 - (June 18, 2019)
------------------
### Changed
* Minor dependency bump

2.15.1 - (June 12, 2019)
------------------
### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.

### Changed
* Reverted change to adjust header-icon top styling

2.15.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Updated misleading `children` documentation
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5
* Adjusted header-icon top styling

2.14.0 - (May 22, 2019)
------------------
### Changed
* Now renders `<ActionHeader />` as a div instead of a header element to avoid duplicate banner landmarks in the DOM

2.13.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump

### Fixed
* Removed 100% heights from container of action header

2.12.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

2.11.0 - (April 9, 2019)
------------------
### Changed
* Minor dependency version bump

2.10.0 - (April 2, 2019)
------------------
### Changed
* Minor dependency version bump

2.9.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

2.8.0 - (March 21, 2019)
------------------
### Changed
* Update Jest tests to use terra-enzyme-intl

2.7.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

### Added
* Added en-AU translations

2.6.0 - (February 12, 2019)
------------------
### Changed
* Minor dependency version bump
* Remove the collapsible menu view from the example

2.5.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (January 27, 2019)
------------------
### Changed
* Minor dependency version bump

2.3.0 - (January 26, 2019)
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

1.33.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency version bump

1.32.1 - (November 20, 2018)
------------------
### Changed
* Patch dependency version bump

1.32.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

1.31.0 - (November 14, 2018)
------------------
### Changed
* Minor dependency version bump

1.30.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

1.29.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

1.28.0 - (October 30, 2018)
------------------
### Changed
* Update mixin import to be more explicit

1.27.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

### Fixed
* Fixed text wrapping to break on whole word instead of part of the word.

1.26.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

1.25.0 - (October 8, 2018)
------------------
### Changed
* Minor dependency version bump

1.24.0 - (October 2, 2018)
------------------
### Changed
* Minor dependency version bump

1.23.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

1.22.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

1.22.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

1.21.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

1.20.0 - (August 30, 2018)
------------------
### Changed
* Minor dependency version bump

1.19.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

1.18.0 - (August 21, 2018)
------------------
### Changed
* Minor dependency version bump

1.17.0 - (August 8, 2018)
------------------
### Changed
* Updated component internationalization error message

1.16.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump
* Disable the next-previous button group button if its associating prop is not set.

1.15.0 - (July 25, 2018)
------------------
### Added
* Add sv and sv-SE translations

1.14.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

1.13.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

1.12.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

1.11.0 - (July 3, 2018)
------------------
### Changed
* Minor dependency version bump

1.10.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

1.9.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

1.8.0 - (June 19, 2018)
------------------
### Changed
* Minor dependency version bump

1.7.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.

1.6.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

1.5.0 - (May 23, 2018)
------------------
### Changed
* Minor dependency version bump

1.4.0 - (May 16, 2018)
------------------
### Changed
* Minor dependency version bump

### Fixed
* Alignment bug with missing start content and title, when using an end aligned item.

1.3.0 - (May 9, 2018)
------------------
### Changed
* Minor dependency version bump

1.2.0 - (May 2, 2018)
------------------
### Changed
* Minor dependency version bump

1.1.0 - (April 20, 2018)
------------------
### Changed
* Minor dependency version bump

1.0.0 - (April 15, 2018)
------------------
* Initial stable release
