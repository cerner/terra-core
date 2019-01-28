Changelog
=========

Unreleased
----------

3.0.0 - (January 22, 2019)
------------------
### Changed
* Updated theme variables

2.31.0 - (January 22, 2019)
------------------
### Changed
* Updated dependencies to fix major version bump issues

2.30.0 - (January 8, 2019)
------------------
### Changed
* Minor dependency version bump

2.29.0 - (January 2, 2019)
------------------
### Added
* Added missing ar translations.

### Changed
* Updated site examples to be more accessible.

2.28.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.27.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.26.0 - (November 9, 2018)
------------------
### Added
* Add full list of locales to terra-i18n translation fixtures

2.25.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

2.24.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

2.23.0 - (October 8, 2018)
------------------
### Changed
* Updated fs-extra dependency to latest stable release (^7.0.0)

2.22.0 - (October 2, 2018)
------------------
### Added
* Export IntlProvider from react-intl

2.21.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

2.20.3 - (September 13, 2018)
------------------
### Fix
* Add post-install script which writes default loaders

2.20.2 - (September 12, 2018)
------------------
### Fix
* Remove post-install script which wrote default loaders

2.20.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

2.20.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.19.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

2.18.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

2.17.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump
* Updated translations

2.16.0 - (July 25, 2018)
------------------
### Added
* Add sv and sv-SE translations

2.15.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update

2.14.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

2.13.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

2.12.0 - (June 22, 2018)
------------------
### Changed
* Major dependency version bump for `fs-extra`

2.11.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.

2.10.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

2.9.0 - (May 23, 2018)
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

### Changed
* Export FormattedMessage from react-intl

2.6.0 - (April 20, 2018)
------------------
### Added
* Added support for nl and nl-BE locales

2.5.0 - (April 15, 2018)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (April 5, 2018)
------------------
### Fixed
* Transpile defaultIntlLoaders and defaultTranslationsLoaders.

2.3.0 - (March 30, 2018)
------------------
### Added
* Implement locale fallback strategy in translations and locale loaders. Fallback strategy will be first try the regional locale, then try the base locale, then try 'en' english base locale, and lastly throw an error if 'en' is not provided.
* Aggregate-translations pre-build tool to aggregate translations and build dynamic intlLoader and translationLoader modules that are configured for the specified locales. This tool is offered as a CLI script and as a setup function.

### Changed
* Open up the i18nLoader restrictions such that non-terra-supported locales will load.

### Fixed
* Only load the specified aggregated-translation locales.

### Added
* Exported react-intl's injectIntl and intlShape

2.2.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

2.1.0 - (February 26, 2018)
------------------
### Changed
* Minor dependency version bump

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16

1.14.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.13.0 - (January 18, 2018)
------------------
### Changed
* Minor dependency version bump

1.12.0 - (November 28, 2017)
------------------
### Changed
* Minor dependency version bump

1.11.0 - (November 16, 2017)
------------------
### Changed
* Minor dependency version bump

1.10.0 - (October 6, 2017)
------------------
### Changed
* Spread customProps onto div.

1.9.0 - (September 26, 2017)
------------------
### Changed
* Minor dependency version bump

1.8.0 - (September 19, 2017)
------------------
### Changed
* Minor dependency version bump

1.7.0 - (September 12, 2017)
------------------
### Changed
* Minor dependency version bump

1.6.0 - (September 7, 2017)
------------------
### Changed
* Minor dependency version bump

1.5.0 - (September 5, 2017)
------------------
### Changed
* Update nightwatch tests and test scripts.

1.4.0 - (August 31, 2017)
------------------
### Changed
* Improved terra-i18n example in README.md

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
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

1.0.0 - (June 28, 2017)
------------------
Initial stable release
