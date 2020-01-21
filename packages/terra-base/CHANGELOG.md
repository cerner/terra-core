ChangeLog
=========

Unreleased
----------
### Changed
* Updated docs to use mdx syntax

5.25.0 - (January 7, 2020)
------------------
### Changed
* Minor dependency version bump

5.24.0 - (December 3, 2019)
------------------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.

5.23.0 - (October 30, 2019)
------------------
### Changed
* Minor dependency version bump

5.22.0 - (October 14, 2019)
------------------
### Changed
* Minor dependency version bump

5.21.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency version bump

5.20.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency version bump

5.19.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.

5.18.0 - (September 6, 2019)
------------------
### Added
* Props table markdown file import added to doc site page

5.17.0 - (August 21, 2019)
------------------
### Changed
* Import for package version from package.json added to doc page
* Switch from Object.assign to Object spread syntax.
* Cleaned up imports in examples and test files

5.16.0 - (August 14, 2019)
------------------
### Changed
* updated package.json test scripts

5.15.0 - (July 30, 2019)
------------------
### Changed
* Minor dependency version bump

5.14.0 - (July 24, 2019)
------------------
### Changed
* Minor dependency version bump

5.13.0 - (July 17, 2019)
------------------
### Changed
* Minor dependency version bump

5.12.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

5.11.0  - (July 11, 2019)
------------------
### Changed
* Minor dependency version bump

5.10.0 - (July 9, 2019)
------------------
### Changed
* Update tests to use `Terra.describeViewports` for setting viewports

5.9.0 - (June 28, 2019)
------------------
### Fixed
* Added missing upgrade guide for migrating from terra-base v4 to v5

5.8.0 - (June 18, 2019)
------------------
### Changed
* Minor dependency bump

5.7.0 - (June 11, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Made required updates to consume terra-toolkit v5 and terra-dev-site v5

5.6.0 - (May 21, 2019)
------------------
### Changed
* Minor dependency version bump

5.5.0 - (May 14, 2019)
------------------
### Removed
* Removed custom props spread on I18nProvider. The I18nProvider does not accept custom props.

5.4.0 - (May 1, 2019)
------------------
### Changed
* Minor dependency version bump
* Updated WDIO tests to use themeCombinationOfCustomProperties instead of themeEachCustomProperty

5.3.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency version bump

5.2.0 - (April 9, 2019)
------------------
### Changed
* Minor dependency version bump

5.1.0 - (April 2, 2019)
------------------
### Changed
* Removed placehold.it image src that was used in docs/tests

5.0.0 - (March 27, 2019)
------------------
### Breaking Changes
* Locale prop is now required
* This package no longer provides the `injectIntl`, `intlShape`, `FormattedMessage`, `IntlProvider` exports from react-intl
* Removed div that wrapped children passed into the base component. The base component now uses a `<React.Fragment>` wrapper around children

4.5.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

4.4.0 - (March 21, 2019)
------------------
### Changed
* Minor dependency version bump

4.3.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency version bump

4.2.0 - (February 12, 2019)
------------------
### Changed
* Minor dependency version bump

4.1.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency version bump

4.0.0 - (January 22, 2019)
------------------
### Changed
* Updated theme variables

3.33.0 - (January 22, 2019)
------------------
### Changed
* Updated dependencies to fix major version bump issues
* Webdriver theme test updated to use base64 image string

3.32.0 - (January 8, 2019)
------------------
### Changed
* Minor dependency version bump

3.31.0 - (January 2, 2019)
------------------
### Changed
* Removed use of componentWillReceiveProps
* Updated site docs to be more accessible

3.30.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

3.29.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

3.28.0 - (November 9, 2018)
------------------
### Added
* data-terra-base attribute added to Base component

### Changed
* Restructured theme tests into a separate file

3.27.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

3.26.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

3.25.0 - (October 8, 2018)
------------------
# Removed
* Removed 'Segoe UI' from default font-stack which was never being rendered on Windows

3.24.0 - (October 2, 2018)
------------------
### Added
* Export IntlProvider from terra-i18n

3.23.0 - (September 25, 2018)
------------------
### Added
* Added `strictMode` prop

3.22.3 - (September 13, 2018)
------------------
### Changed
* Patch dependency version bump

3.22.2 - (September 12, 2018)
------------------
### Changed
* Patch dependency version bump

3.22.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

3.22.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

3.21.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

3.20.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

3.19.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

3.18.0 - (July 25, 2018)
------------------
### Added
* Add sv and sv-SE locale data

3.17.0 - (July 19, 2018)
------------------
### Added
* Added 'Segoe UI' to font stack just before Arial

3.16.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

### Added
* Added themeable variable for setting a background styles

3.15.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

3.14.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

3.13.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

3.12.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.

3.11.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

3.10.0 - (May 23, 2018)
------------------
### Changed
* Minor dependency version bump

3.9.0 - (May 16, 2018)
------------------
### Changed
* Minor dependency version bump

3.8.0 - (May 9, 2018)
------------------
### Changed
* Minor dependency version bump

3.7.0 - (May 2, 2018)
------------------
### Changed
* Export FormattedMessage from react-intl

3.6.0 - (April 20, 2018)
------------------
### Changed
* Minor dependency version bump

3.5.0 - (April 15, 2018)
------------------
### Changed
* Minor dependency version bump

3.4.0 - (April 5, 2018)
------------------
### Changed
* Minor dependency version bump

3.3.0 - (March 30, 2018)
------------------
### Removed
* Removed unused terra-mixins package
* Removed out-dated theme mixin

### Fixed
* Added missing eslint-disable-next-line no-console

### Added
* Exported injectIntl/intlShape from package

3.2.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

3.1.0 - (February 26, 2018)
------------------
### Fixed
* Fixed bug where new locales did not update correctly

3.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16

2.11.1 - (February 9, 2018)
------------------
### Removed
* Removed terra-legacy-theme global styles to hyperlinks all over the components.

2.11.0 - (February 1, 2018)
------------------
### Added
* Added terra-legacy-theme global styles to hyperlinks all over the components.

2.10.0 - (January 18, 2018)
------------------
### Changed
* Minor dependency version bump

2.9.0 - (January 5, 2018)
------------------
### Changed
* Minor dependency version bump

2.8.0 - (November 28, 2017)
------------------
### Changed
* componentWillReceiveProps will now compare locale instead of props.

2.7.0 - (November 16, 2017)
------------------
### Changed
* Minor dependency version bump

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
* Minor dependency version bump

2.3.0 - (September 12, 2017)
------------------
### Changed
* Minor dependency version bump

2.2.0 - (September 7, 2017)
------------------
### Changed
* Minor dependency version bump

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
* Minor dependency version bump

1.2.0 - (August 1, 2017)
------------------
### Changed
* Minor dependency version bump

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
