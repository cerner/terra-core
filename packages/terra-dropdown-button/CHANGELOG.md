# Changelog

## Unreleased
* Fixed
   * Added logic to change the selection when we are on last option to first option and vice-versa

## 1.32.0 - (March 1, 2023)

* Changed
  * Minor dependency version bump

## 1.31.0 - (February 15, 2023)

* Changed
  * Updated wdio screenshots due to functional-testing upgrade.

## 1.30.0 - (December 7, 2022)

* Changed
  * Minor dependency version bump

## 1.29.1 - (December 14, 2021)

* Changed
  * Migrate doc to terra-core-docs.

## 1.29.0 - (September 21, 2021)

* Changed
  * Updated WDIO Screenshots due to webpack-config-terra sass upgrade.

## 1.28.0 - (June 8, 2021)

* Changed
  * Updated `keycode-js` from `v2.0.1` to `v3.1.0`.

## 1.27.0 - (April 6, 2021)

* Changed
  * Removed unnecessary `wdio.conf.js` file
  * Upgrade tests to terra-functional-testing and WebDriverIO v6
  * Updated Jest command

## 1.26.0 - (March 2, 2021)

* Fixed
  * Fixed misalignment when rendered with terra-button.

## 1.25.0 - (February 17, 2021)

* Fixed
  * Fixed incorrect role in `Item` from `presentation` to `menuitem` for upcoming axe-core version bump

## 1.24.0 - (January 5, 2021)

* Fixed
 * Fixed broken links in documentation.

* Changed
  * Updated to be compatible with `react-intl` v2-v5
  * Removed usage of `intlShape`
  * Update wdio tests to remove deprecated Terra.it helpers

## 1.23.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

## 1.22.0 - (October 13, 2020)

* Fixed
  * Fix to prevent modal from closing on pressing escape to close dropdown.

## 1.21.0 - (August 18, 2020)

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices and removed tests for hover styles.

## 1.20.0 - (August 4, 2020)

* Changed
  * Minor dependency version bump

## 1.19.0 - (July 29, 2020)

* Changed
  * Update changelog formatting

## 1.18.0 - (July 7, 2020)

* Changed
  * Minor dependency version bump

## 1.17.0 - (June 23, 2020)

* Changed
  * Fixed dropdown not opening on pressing space in firefox, and reverted disabled tests for firefox.

## 1.16.0 - (June 11, 2020)

* Changed
  * Disabled wdio test which opens dropdown menu with space key for firefox testing. This will be re-enabled when https://github.com/cerner/terra-core/issues/3008 is resolved.

* Removed
  * Removed duplicate test

## 1.15.0 - (June 9, 2020)

* Changed
  * Update wdio test configuration to use root wdio config

## 1.14.0 - (May 19, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 1.13.0 - (April 28, 2020)

* Changed
  * Removed "View Component Source Code" from docs in favour of source code badge
* Added
  * Added clinical-lowlight-theme wdio screenshots

## 1.12.0 - (April 22, 2020)

* Changed
  * Updated docs for documentation link and expanded `PropTypes` for Props Table
  * Removed extra lines from README

## 1.11.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 1.10.0 - (February 4, 2020)

* Added
  * Added metaData for primary-button in SplitButton to `onSelect` callback.

* Changed
  * Changed focus behaviour of DropdownButton and SplitButton such that focus stays on button when dropdown is opened via mouse click.
  * Update docs to use mdx syntax.

* Fixed
  * Fixed primary button issue of not getting focused on click in Firefox, Safari and IE.

## 1.9.0 - (January 7, 2020)

* Changed
  * Minor dependency version bump

## 1.8.0 - (December 3, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 1.7.0 - (October 30, 2019)

* Fixed
  * Primary button click not closing menu, when menu is open issue fixed.
  * Multiple instances of split-button and drop-down cannot be opened simultaneously.

* Added
  * Added metaData and event to `onSelect` callback.

## 1.6.0 - (October 3, 2019)

* Changed
  * Minor dependency version bump

## 1.5.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.

* Fixed
  * Reset default margin in Safari.

* Added
  * Added en-CA translations.

## 1.4.0 - (September 6, 2019)

* Added
  * Props table markdown file import added to doc site page

## 1.3.0 - (September 3, 2019)

* Changed
  * Updated the 'keycode-js' version from '^1.0.4' to '^2.0.1'.

## 1.2.0 - (August 21, 2019)

* Changed
  * Import for package version from package.json added to doc page
  * Cleaned up imports in examples and test files

## 1.1.0 - (August 14, 2019)

* Changed
  * Minor dependency updates

## 1.0.0 - (July 30, 2019)

* Initial stable release
