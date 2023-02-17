# Changelog

## Unreleased

## 5.23.0 - (February 15, 2023)

* Changed
  * Minor dependency version bump

## 5.22.0 - (February 7, 2023)

* Changed
  * Minor dependency version bump

## 5.21.1 - (January 31, 2023)

* Changed
  * Updated wdio screenshots due to functional-testing upgrade.

* Changed
  * Jest snapshots updated due to decorative / informative icon changes in terra-icon.

## 5.21.0 - (January 9, 2023)

* Changed
  * Minor dependency version bump of terra-icon and terra-form-field

## 5.20.0 - (December 7, 2022)

* Changed
  * Minor dependency version bump

## 5.19.5 - (July 5, 2022)

* Changed
  * Minor dependency version bump

## 5.19.4 - (May 3, 2022)

* Changed
  * Minor dependency version bump

## 5.19.3 - (April 29, 2022)

* Changed
  * Minor dependency version bump

## 5.19.2 - (January 4, 2022)

* Changed
  * Minor dependency version bump

## 5.19.1 - (December 14, 2021)

* Changed
  * Migrate docs to terra-core-docs.

## 5.19.0 - (September 21, 2021)

* Changed
  * Updated WDIO Screenshots due to webpack-config-terra sass upgrade.

## 5.18.0 - (August 25, 2021)

* Changed
  * Updated WDIO snapshots due to terra-functional-testing v2 upgrade.

## 5.17.0 - (June 22, 2021)

* Changed
  * Minor dependency version bump

## 5.16.0 - (April 13, 2021)

* Changed
  * Minor dependency version bump

## 5.15.0 - (April 6, 2021)

* Changed
  * Removed unnecessary `wdio.conf.js` file
  * Updated to use terra-functional-testing
  * Updated Jest command

## 5.14.0 - (March 2, 2021)

* Fixed
  * parseInt now correctly specifies the radix parameter as base 10 not base 0. (I'm not even sure what that was doing.)

## 5.13.0 - (February 2, 2021)

* Changed
  * Minor dependency version bump

## 5.12.0 - (January 12, 2021)

* Fixed
  * Added `size`, `rows`, `disableResize` and `isAutoResizable` props to textarea-field.

## 5.11.0 - (January 5, 2021)

* Fixed
  * Fixed broken links in documentation.

## 5.10.0 - (December 8, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 5.9.0 - (November 17, 2020)

* Changed
  * Minor dependency version bump

## 5.8.0 - (November 10, 2020)

* Changed
  * Minor dependency version bump

## 5.7.0 - (October 27, 2020)

* Changed
  * Minor dependency version bump

## 5.6.0 - (October 13, 2020)

* Changed
  * Removed reference to terra-markdown

## 5.5.0 - (September 29, 2020)

* Changed
  * Minor dependency version bump

## 5.4.0 - (September 16, 2020)

* Added
  * Prop `onInput` - Callback for when user inputs a value.

## 5.3.0 - (September 1, 2020)

* Removed
  * Removed the use of `terra-form-field` from doc site examples.

## 5.2.0 - (August 6, 2020)

* Changed
  * Minor dependency version bump

## 5.1.0 - (August 4, 2020)

* Changed
  * Minor dependency version bump

## 5.0.0 - (July 29, 2020)

* Breaking Change
  * Removed `placeholder` prop.

* Changed
  * Updated examples to not use `placeholder` prop
  * Update changelog formatting
  * Updated jest tests due to icon changes

* Removed
  * Removed theme variables - see UPGRADEGUIDE.md
  * Removed tests specifically for `placeholder` prop

## 4.8.0 - (July 7, 2020)

* Changed
  * updated `master` references to `main`.

## 4.7.0 - (June 11, 2020)

* Changed
  * Disabled wdio axe color-contrast testing on placeholder examples for IE testing. This will be re-enabled when https://github.com/cerner/terra-core/issues/2992 is resolved.

## 4.6.0 - (June 9, 2020)

* Changed
  * Updated jest due to icon theme context.
  * Update wdio test configuration to use root wdio config

## 4.5.0 - (May 26, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 4.4.0 - (May 19, 2020)

* Changes
  * Update wdio tests to move cursor to fix inconsistent hover styles in internal themes

## 4.3.0 - (May 12, 2020)

* Changed
  * Set placeholders opacity to 1 to make firefox color-contrast consistent with other browsers

## 4.2.0 - (April 28, 2020)

* Changed
  * Removed "View Component Source Code" from docs in favour of source code badge
* Added
  * Added clinical-lowlight-theme wdio screenshots

## 4.1.0 - (April 22, 2020)

* Changed
  * Added Usage section in docs
  * Updated imports for `TextareaField` examples
  * Updated documentation link in README

## 4.0.0 - (March 31, 2020)

* Breaking Change
  * `label` prop's type changed from node to string.

## 3.38.0 - (March 10, 2020)

* Changed
  * Minor dependency version bump

## 3.37.0 - (February 25, 2020)

* Changed
  * Update docs to use mdx syntax.

## 3.36.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 3.35.0 - (January 28, 2020)

* Changed
  * Minor dependency version bump

## 3.34.0 - (January 7, 2020)

* Changed
  * Minor dependency version bump

## 3.33.0 - (December 10, 2019)

* Changed
  * Added `disableResize` prop to disable resizability of text area.

## 3.32.0 - (December 3, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 3.31.0 - (October 30, 2019)

* Changed
  * Duplicate IDs in example changed.

## 3.30.0 - (October 15, 2019)

* Changed
  * Minor dependency version bump

## 3.29.0 - (October 14, 2019)

* Changed
  * Minor dependency version bump

* Added
  * Added `placeholder` as a property to `<Textarea />` and `<TextareaField />`
  * Added `isIncomplete` prop to show incomplete stylings.

## 3.28.0 - (October 3, 2019)

* Changed
  * Minor dependency version bump

## 3.27.0 - (September 26, 2019)

* Changed
  * Minor dependency version bump

## 3.26.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.

## 3.25.0 - (September 6, 2019)

* Changed
  * Minor dependency version bump

## 3.24.0 - (September 3, 2019)

* Fixed
  * Fixed issue where using aria-label as a custom prop the `<Textarea />` component was not passing through correctly.

## 3.23.0 - (August 21, 2019)

* Added
  * Props table markdown file import added to doc site page
  * Added `ariaLabel` prop to improve accessibility.
  * Added example on documentation site

* Changed
  * Import for package version from package.json added to doc page
  * Switch from Object.assign to Object spread syntax.
  * Cleaned up imports in examples and test files

## 3.22.0 - (August 14, 2019)

* Changed
  * Minor dependency version bump

## 3.21.0 - (July 30, 2019)

* Changed
  * Minor dependency version bump
  * Updated errorIcon default prop from `Field.defaultProps.errorIcon` with `<IconError>` component.
  * updated package.json test scripts

* Removed
  * Removed explicit calls to set `caret-color` to `transparent` in WDIO tests

## 3.20.0 - (July 24, 2019)

* Changed
  * Minor dependency version bump

* Changed
  * Update tests for dev-site v6

## 3.19.0 - (July 17, 2019)

* Changed
  * Revert replaced `Field.defaultProps.errorIcon` with `<IconError>` component.

## 3.18.0 - (July 17, 2019)

* Changed
  * Replaced `Field.defaultProps.errorIcon` with `<IconError>` component.

* Fixed
  * Fix min-height inline style bug - Use componentDidUpdate update to apply min height

## 3.17.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 3.16.0  - (July 11, 2019)

* Changed
  * Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`

## 3.15.0 - (June 28, 2019)

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.

## 3.14.0 - (June 18, 2019)

* Changed
  * Minor dependency bump

## 3.13.0 - (June 11, 2019)

* Removed
  * Removed node_modules from .npmignore
  * Removed vendor style rule added to fade placeholder text. Since Autoprefixer V9 resolves vendor prefix issue.

* Changed
  * Added `isTextarea` type on Textarea component to help with component identity
  * Reordered examples on documentation site
  * Clarified functionality of `isAutoResizable` and `size` props for TextArea
  * Made required updates to consume terra-toolkit v5 and terra-dev-site v5

## 3.12.0 - (May 1, 2019)

* Changed
  * Minor dependency version bump
  * Added 'disabled' prop to TextAreaField component

* Fixed
  * Add vendor style rule for IE11 to fade placeholder text.

## 3.11.0 - (April 16, 2019)

* Changed
  * Minor dependency version bump

## 3.10.0 - (April 9, 2019)

* Changed
  * Minor dependency version bump

## 3.9.0 - (April 2, 2019)

* Changed
  * Minor dependency version bump

## 3.8.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.7.0 - (March 21, 2019)

* Added
  * Added logic to enable accessible mapping of TextareaField and it's related error and help text messages

## 3.6.0 - (February 26, 2019)

* Changed
  * Minor dependency version bump

* Fixed
  * Changed browser.execute functions in wdio spec to be strings for IE and FF driver compatibility

## 3.5.0 - (February 12, 2019)

* Changed
  * Minor dependency version bump

## 3.4.0 - (February 5, 2019)

* Changed
  * Minor dependency version bump

## 3.3.0 - (January 26, 2019)

* Changed
  * Minor dependency version bump

## 3.2.0 - (January 22, 2019)

* Changed
  * Minor dependency version bump

## 3.1.0 - (January 22, 2019)

* Changed
  * Minor dependency version bump

## 3.0.0 - (January 8, 2019)

* Changed
  * Updated theme variables

## 2.34.0 - (January 2, 2019)

* Changed
  * Minor dependency version bump
  * Removed use of componentWillMount from examples
  * Updated site examples to be more accessible.

* Added
  * maxWidth prop added to pass through to terra-form-field

## 2.33.1 - (November 20, 2018)

* Changed
  * Patch dependency version bump

## 2.33.0 - (November 19, 2018)

* Changed
  * Minor dependency version bump

## 2.32.0 - (November 13, 2018)

* Changed
  * Minor dependency version bump

## 2.31.0 - (November 9, 2018)

* Changed
  * Updated textarea documentation examples

## 2.30.0 - (October 24, 2018)

* Changed
  * Minor dependency version bump

## 2.29.0 - (October 16, 2018)

* Changed
  * Minor dependency version bump

## 2.28.0 - (October 8, 2018)

* Changed
  * Minor dependency version bump

## 2.27.0 - (October 2, 2018)

* Added
  * Export for textarea size added

## 2.26.0 - (September 25, 2018)

* Changed
  * Minor dependency version bump

## 2.25.0 - (September 13, 2018)

* Fixed
  * Set custom prop spreads first in textarea and Field tags

## 2.24.1 - (September 6, 2018)

* Changed
  * Patch dependency version bump

## 2.24.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.23.0 - (September 4, 2018)

* Changed
  * Minor dependency version bump

* Added
  * Placeholder styling
  * Webdriver and dev site tests for disabled, placeholder, and value styling

## 2.22.0 - (August 29, 2018)

* Changed
  * Minor dependency version bump

## 2.21.0 - (August 8, 2018)

* Changed
  * Minor dependency version bump

## 2.20.0 - (August 1, 2018)

* Changed
  * Minor dependency version bump

## 2.19.0 - (July 25, 2018)

* Changed
  * Minor dependency version bump

## 2.18.0 - (July 19, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 2.17.0 - (July 17, 2018)

* Changed
  * Minor dependency version bump
  * Formatting changes per eslint v4 update

## 2.16.0 - (July 10, 2018)

* Changed
  * Minor dependency version bump

## 2.15.0 - (June 28, 2018)

* Changed
  * Minor dependency version bump

* Added
  * Added change log to the documentation on terra-dev-site

* Fixed
  * Fixed broken wdio screenshots

## 2.14.0 - (June 22, 2018)

* Changed
  * Moved terra-base from dependency to peerDependency

## 2.13.0 - (June 12, 2018)

* Changed
  * Updated "test:jest" script to work on windows.

* Added
  * Ability to get textarea ref via `refCallback` prop

## 2.12.0 - (May 30, 2018)

* Changed
  * Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

## 2.11.0 - (May 25, 2018)

* Changed
  * Updated the README example code

## 2.10.0 - (May 23, 2018)

* Changed
  * Minor dependency version bump

## 2.9.0 - (May 16, 2018)

* Changed
  * Minor dependency version bump

## 2.8.0 - (May 9, 2018)

* Changed
  * Minor dependency version bump

## 2.7.0 - (May 2, 2018)

* Changed
  * Minor dependency version bump

* Added
  * Added TextareaField to package

## 2.6.0 - (April 20, 2018)

* Changed
  * Minor dependency version bump

## 2.5.0 - (April 15, 2018)

* Changed
  * Minor dependency version bump

## 2.4.0 - (April 5, 2018)

* Changed
  * Minor dependency version bump

## 2.3.0 - (March 30, 2018)

* Removed
  * Removed unused terra-mixins package

## 2.2.0 - (March 6, 2018)

* Removed
  * Removed props-table script from package.json

## 2.1.0 - (February 26, 2018)

* Changed
  * Minor dependency version bump

## 2.0.1 - (February 13, 2018)

* Changed
  * Updated peerDependencies

## 2.0.0 - (February 12, 2018)

* Changed
  * Updated to use React 16

## 1.4.0 - (February 1, 2018)

* Changed
  * Minor dependency version bump

## 1.3.0 - (January 18, 2018)

* Changed
  * Minor dependency version bump

## 1.2.0 - (January 5, 2018)

* Changed
  * Minor dependency version bump

## 1.1.0 - (November 28, 2017)

* Changed
  * Minor dependency version bump

## 1.0.0 - (November 16, 2017)

Initial stable release
