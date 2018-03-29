<!-- Logo -->
<p align="center">
  <img height="128" width="128" src="https://github.com/cerner/terra-core/raw/master/terra.png">
</p>

<!-- Name -->
<h1 align="center">
  Terra Core
</h1>

[![Cerner OSS](https://img.shields.io/badge/Cerner-OSS-blue.svg?style=flat)](http://engineering.cerner.com/2014/01/cerner-and-open-source/)
[![Build Status](https://travis-ci.org/cerner/terra-core.svg?branch=master)](https://travis-ci.org/cerner/terra-core)
[![lerna](https://img.shields.io/badge/Maintained%20With-Lerna-cc00ff.svg)](https://lernajs.io/)
[![devDependencies status](https://david-dm.org/cerner/terra-core/dev-status.svg)](https://david-dm.org/cerner/terra-core?type=dev)

- [Supported Browsers](#supported-browsers)
- [Packages](#packages)
- [Internationalization](#internationalization-i18n)
  - [Packages Required I18n](#packages-requiring-i18n)
- [Contributing](#contributing)
- [LICENSE](#license)

## Packages

### Versioning

When a component reaches v1.0.0., it is considered to be stable and will follow [SemVer](http://semver.org/) for versioning.
1. MAJOR versions represent breaking changes
2. MINOR versions represent added functionality in a backwards-compatible manner
3. PATCH versions represent backwards-compatible bug fixes

Consult the component CHANGELOGs, related issues, and PRs for more information.

We view the React.js props API of our components as our main public API. We use this to guide us when versioning components.

Prior to components reaching v1.0.0, a component is considered to be in a beta stage.
Components in beta stage may include breaking changes, new features, and bug fixes all within v0.x.x releases.

### Status
![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg)
![Stable](https://img.shields.io/badge/status-Beta-orange.svg)
![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg)


| Terra Package      | Version | Status |
|--------------------|---------|--------|
| [terra-alert](https://github.com/cerner/terra-core/tree/master/packages/terra-alert) | [![NPM version](http://img.shields.io/npm/v/terra-alert.svg)](https://www.npmjs.org/package/terra-alert) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-arrange](https://github.com/cerner/terra-core/tree/master/packages/terra-arrange) | [![NPM version](http://img.shields.io/npm/v/terra-arrange.svg)](https://www.npmjs.org/package/terra-arrange) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| terra-application | [![NPM version](http://img.shields.io/npm/v/terra-application.svg)](https://www.npmjs.org/package/terra-application) | ![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg) |
| [terra-badge](https://github.com/cerner/terra-core/tree/master/packages/terra-badge) | [![NPM version](http://img.shields.io/npm/v/terra-badge.svg)](https://www.npmjs.org/package/terra-badge) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-base](https://github.com/cerner/terra-core/tree/master/packages/terra-base) | [![NPM version](http://img.shields.io/npm/v/terra-base.svg)](https://www.npmjs.org/package/terra-base) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-button](https://github.com/cerner/terra-core/tree/master/packages/terra-button) | [![NPM version](http://img.shields.io/npm/v/terra-button.svg)](https://www.npmjs.org/package/terra-button) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-button-group](https://github.com/cerner/terra-core/tree/master/packages/terra-button-group) | [![NPM version](http://img.shields.io/npm/v/terra-button-group.svg)](https://www.npmjs.org/package/terra-button-group) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-card](https://github.com/cerner/terra-core/tree/master/packages/terra-card) | [![NPM version](http://img.shields.io/npm/v/terra-card.svg)](https://www.npmjs.org/package/terra-card) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-content-container](https://github.com/cerner/terra-core/tree/master/packages/terra-content-container) | [![NPM version](http://img.shields.io/npm/v/terra-content-container.svg)](https://www.npmjs.org/package/terra-content-container) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-date-picker](https://github.com/cerner/terra-core/tree/master/packages/terra-date-picker) | [![NPM version](http://img.shields.io/npm/v/terra-date-picker.svg)](https://www.npmjs.org/package/terra-date-picker) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-demographics-banner](https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner) | [![NPM version](http://img.shields.io/npm/v/terra-demographics-banner.svg)](https://www.npmjs.org/package/terra-demographics-banner) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-dynamic-grid](https://github.com/cerner/terra-core/tree/master/packages/terra-dynamic-grid) | [![NPM version](http://img.shields.io/npm/v/terra-dynamic-grid.svg)](https://www.npmjs.org/package/terra-dynamic-grid) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-embedded-content-consumer](https://github.com/cerner/terra-core/tree/master/packages/terra-embedded-content-consumer) | [![NPM version](http://img.shields.io/npm/v/terra-embedded-content-consumer.svg)](https://www.npmjs.org/package/terra-embedded-content-consumer) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-form](https://github.com/cerner/terra-core/tree/master/packages/terra-form) | [![NPM version](http://img.shields.io/npm/v/terra-form.svg)](https://www.npmjs.org/package/terra-form) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-grid](https://github.com/cerner/terra-core/tree/master/packages/terra-grid) | [![NPM version](http://img.shields.io/npm/v/terra-grid.svg)](https://www.npmjs.org/package/terra-grid) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-heading](https://github.com/cerner/terra-core/tree/master/packages/terra-heading) | [![NPM version](http://img.shields.io/npm/v/terra-heading.svg)](https://www.npmjs.org/package/terra-heading) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-i18n](https://github.com/cerner/terra-core/tree/master/packages/terra-i18n) | [![NPM version](http://img.shields.io/npm/v/terra-i18n.svg)](https://www.npmjs.org/package/terra-i18n) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-i18n-plugin](https://github.com/cerner/terra-core/tree/master/packages/terra-i18n-plugin) | [![NPM version](http://img.shields.io/npm/v/terra-i18n-plugin.svg)](https://www.npmjs.org/package/terra-i18n-plugin) | ![Stable](https://img.shields.io/badge/status-Deprecated-lightgrey.svg) |
| [terra-icon](https://github.com/cerner/terra-core/tree/master/packages/terra-icon) | [![NPM version](http://img.shields.io/npm/v/terra-icon.svg)](https://www.npmjs.org/package/terra-icon) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-image](https://github.com/cerner/terra-core/tree/master/packages/terra-image) | [![NPM version](http://img.shields.io/npm/v/terra-image.svg)](https://www.npmjs.org/package/terra-image) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-legacy-theme](https://github.com/cerner/terra-core/tree/master/packages/terra-legacy-theme) | [![NPM version](http://img.shields.io/npm/v/terra-legacy-theme.svg)](https://www.npmjs.org/package/terra-legacy-theme) | ![Deprecated](https://img.shields.io/badge/status-Deprecated-lightgrey.svg) |
| [terra-list](https://github.com/cerner/terra-core/tree/master/packages/terra-list) | [![NPM version](http://img.shields.io/npm/v/terra-list.svg)](https://www.npmjs.org/package/terra-list) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-markdown](https://github.com/cerner/terra-core/tree/master/packages/terra-markdown) | [![NPM version](http://img.shields.io/npm/v/terra-markdown.svg)](https://www.npmjs.org/package/terra-markdown) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-menu](https://github.com/cerner/terra-core/tree/master/packages/terra-menu) | [![NPM version](http://img.shields.io/npm/v/terra-menu.svg)](https://www.npmjs.org/package/terra-menu) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-mixins](https://github.com/cerner/terra-core/tree/master/packages/terra-mixins) | [![NPM version](http://img.shields.io/npm/v/terra-mixins.svg)](https://www.npmjs.org/package/terra-mixins) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-modal](https://github.com/cerner/terra-core/tree/master/packages/terra-modal) | [![NPM version](http://img.shields.io/npm/v/terra-modal.svg)](https://www.npmjs.org/package/terra-modal) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-overlay](https://github.com/cerner/terra-core/tree/master/packages/terra-overlay) | [![NPM version](http://img.shields.io/npm/v/terra-overlay.svg)](https://www.npmjs.org/package/terra-overlay) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-progress-bar](https://github.com/cerner/terra-core/tree/master/packages/terra-progress-bar) | [![NPM version](http://img.shields.io/npm/v/terra-progress-bar.svg)](https://www.npmjs.org/package/terra-progress-bar) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-props-table](https://github.com/cerner/terra-core/tree/master/packages/terra-props-table)  | [![NPM version](http://img.shields.io/npm/v/terra-props-table.svg)](https://www.npmjs.org/package/terra-props-table) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-responsive-element](https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element) | [![NPM version](http://img.shields.io/npm/v/terra-responsive-element.svg)](https://www.npmjs.org/package/terra-responsive-element) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-search-field](https://github.com/cerner/terra-core/tree/master/packages/terra-search-field) | [![NPM version](http://img.shields.io/npm/v/terra-search-field.svg)](https://www.npmjs.org/package/terra-search-field) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-slide-group](https://github.com/cerner/terra-core/tree/master/packages/terra-slide-group) | [![NPM version](http://img.shields.io/npm/v/terra-slide-group.svg)](https://www.npmjs.org/package/terra-slide-group) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-status](https://github.com/cerner/terra-core/tree/master/packages/terra-status) | [![NPM version](http://img.shields.io/npm/v/terra-status.svg)](https://www.npmjs.org/package/terra-status) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-status-view](https://github.com/cerner/terra-core/tree/master/packages/terra-status-view) | [![NPM version](http://img.shields.io/npm/v/terra-status-view.svg)](https://www.npmjs.org/package/terra-status-view) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-table](https://github.com/cerner/terra-core/tree/master/packages/terra-table) | [![NPM version](http://img.shields.io/npm/v/terra-table.svg)](https://www.npmjs.org/package/terra-table) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-text](https://github.com/cerner/terra-core/tree/master/packages/terra-text) | [![NPM version](http://img.shields.io/npm/v/terra-text.svg)](https://www.npmjs.org/package/terra-text) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-time-input](https://github.com/cerner/terra-core/tree/master/packages/terra-time-input) | [![NPM version](http://img.shields.io/npm/v/terra-time-input.svg)](https://www.npmjs.org/package/terra-time-input) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-toggle](https://github.com/cerner/terra-core/tree/master/packages/terra-toggle) | [![NPM version](http://img.shields.io/npm/v/terra-toggle.svg)](https://www.npmjs.org/package/terra-toggle) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-toggle-button](https://github.com/cerner/terra-core/tree/master/packages/terra-toggle-button) | [![NPM version](http://img.shields.io/npm/v/terra-toggle-button.svg)](https://www.npmjs.org/package/terra-toggle-button) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
| [terra-tag](https://github.com/cerner/terra-core/tree/master/packages/terra-tag) | [![NPM version](http://img.shields.io/npm/v/terra-text.svg)](https://www.npmjs.org/package/terra-text) | ![Stable](https://img.shields.io/badge/status-Stable-brightgreen.svg) |
## Supported Browsers

| Browser                     | Version |
|-----------------------------|---------|
| Chrome & Chrome for Android | Current |
| Edge                        | Current |
| Firefox                     | Current |
| Internet Explorer           | 10 & 11 |
| Safari & Mobile Safari      | Current |

## Internationalization (I18n)

1. Please follow [Base Getting Started](packages/terra-base/README.md#getting-started) to install `Base`, and consume it with `locale` props.
2. Please follow [terra-i18n Aggregate Translations Guide](https://github.com/cerner/terra-core/blob/master/packages/terra-i18n/docs/AggregateTranslations.md) to set up aggregated translations.
3. Install and config `react-intl`
    - Install it `npm install --save react-intl`.
    - Add alias webpack config to avoid importing duplicate `react-intl`.
        ```
        resolve: {
          extensions: ['.js', '.jsx'],
          alias: {
            'react-intl': path.resolve(__dirname, 'node_modules/react-intl'),
          },
        },
        ```
4. Provide values for `locale` and `customMessages` prop of `Base`.
5. Follow [react-intl wiki](https://github.com/yahoo/react-intl/wiki/API) to use `injectIntl`([pass translations to props](https://github.com/cerner/terra-core/wiki/terra-i18n-Guide#pass-translated-message-as-props)) or `FormattedMessage`([render translations](https://github.com/cerner/terra-core/wiki/terra-i18n-Guide#display-transalated-message-without-default-message-fallback)) to consume translations.

### Packages Requiring I18n

- [terra-alert](https://github.com/cerner/terra-core/tree/master/packages/terra-alert)
- [terra-date-picker](https://github.com/cerner/terra-core/tree/master/packages/terra-date-picker)
- [terra-date-time-picker](https://github.com/cerner/terra-core/tree/master/packages/terra-date-time-picker)
- [terra-demographics-banner](https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner)
- [terra-form-field](https://github.com/cerner/terra-core/tree/master/packages/terra-form-field)
- [terra-form-select](https://github.com/cerner/terra-core/tree/master/packages/terra-form-select)
- [terra-overlay](https://github.com/cerner/terra-core/tree/master/packages/terra-overlay)
- [terra-search-field](https://github.com/cerner/terra-core/tree/master/packages/terra-search-field)
- [terra-status-view](https://github.com/cerner/terra-core/tree/master/packages/terra-status-view)
- [terra-tabs](https://github.com/cerner/terra-core/tree/master/packages/terra-tabs)
- [terra-time-input](https://github.com/cerner/terra-core/tree/master/packages/terra-time-input)

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

## Local Development

1. Install docker https://www.docker.com/ to run browser tests.
2. Install dependencies and run tests.
```sh
npm install
npm run test
```

## LICENSE

Copyright 2017 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
