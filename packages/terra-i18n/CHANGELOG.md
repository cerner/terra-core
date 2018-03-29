Changelog
=========

Unreleased
----------
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
* Minor version bump

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16

1.14.0 - (February 1, 2018)
------------------
### Changed
* Minor version bump

1.13.0 - (January 18, 2018)
------------------
### Changed
* Minor version bump

1.12.0 - (November 28, 2017)
------------------
### Changed
* Minor version bump

1.11.0 - (November 16, 2017)
------------------
### Changed
* Minor version bump

1.10.0 - (October 6, 2017)
------------------
### Changed
* Spread customProps onto div.

1.9.0 - (September 26, 2017)
------------------
### Changed
* Minor version bump

1.8.0 - (September 19, 2017)
------------------
### Changed
* Minor version bump

1.7.0 - (September 12, 2017)
------------------
### Changed
* Minor version bump

1.6.0 - (September 7, 2017)
------------------
### Changed
* Minor version bump

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
* Minor version bump

1.2.0 - (August 1, 2017)
------------------
### Changed
* Minor version bump

1.1.0 - (July 18, 2017)
------------------
### Changed
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

1.0.0 - (June 28, 2017)
------------------
Initial stable release
