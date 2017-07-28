<!-- Logo -->
<p align="center">
  <img height="128" width="128" src="https://github.com/cerner/terra-core/raw/master/terra.png">
</p>

<!-- Name -->
<h1 align="center">
  Terra Core
</h1>

[![Build Status](https://travis-ci.org/cerner/terra-core.svg?branch=master)](https://travis-ci.org/cerner/terra-core)

- [Supported Browsers](#supported-browsers)
- [Packages](#packages)
- [Internationalization](#internationalizationi18n)
  - [Packages Required I18n](#packages-required-i18n)
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
:white_check_mark: Stable
:large_orange_diamond: Beta
:construction: In Progress
:x: Deprecated


| Terra Package      | Version | Status |
|--------------------|---------|--------|
| [terra-alert](https://github.com/cerner/terra-core/tree/master/packages/terra-alert) | [![NPM version](http://img.shields.io/npm/v/terra-alert.svg)](https://www.npmjs.org/package/terra-alert) | :white_check_mark: |
| [terra-arrange](https://github.com/cerner/terra-core/tree/master/packages/terra-arrange) | [![NPM version](http://img.shields.io/npm/v/terra-arrange.svg)](https://www.npmjs.org/package/terra-arrange) | :white_check_mark: |
| [terra-app-delegate](https://github.com/cerner/terra-core/tree/master/packages/terra-app-delegate)  | [![NPM version](http://img.shields.io/npm/v/terra-app-delegate.svg)](https://www.npmjs.org/package/terra-app-delegate) | :white_check_mark: |
| terra-application  | [![NPM version](http://img.shields.io/npm/v/terra-application.svg)](https://www.npmjs.org/package/terra-application) | :x: |
| [terra-badge](https://github.com/cerner/terra-core/tree/master/packages/terra-badge) | [![NPM version](http://img.shields.io/npm/v/terra-badge.svg)](https://www.npmjs.org/package/terra-badge) | :white_check_mark: |
| [terra-base](https://github.com/cerner/terra-core/tree/master/packages/terra-base) | [![NPM version](http://img.shields.io/npm/v/terra-base.svg)](https://www.npmjs.org/package/terra-base) | :white_check_mark: |
| [terra-button](https://github.com/cerner/terra-core/tree/master/packages/terra-button) | [![NPM version](http://img.shields.io/npm/v/terra-button.svg)](https://www.npmjs.org/package/terra-button) | :white_check_mark: |
| [terra-button-group](https://github.com/cerner/terra-core/tree/master/packages/terra-button-group) | [![NPM version](http://img.shields.io/npm/v/terra-button-group.svg)](https://www.npmjs.org/package/terra-button-group) | :white_check_mark: |
| [terra-content-container](https://github.com/cerner/terra-core/tree/master/packages/terra-content-container) | [![NPM version](http://img.shields.io/npm/v/terra-content-container.svg)](https://www.npmjs.org/package/terra-content-container) | :white_check_mark: |
| [terra-date-picker](https://github.com/cerner/terra-core/tree/master/packages/terra-date-picker) | [![NPM version](http://img.shields.io/npm/v/terra-date-picker.svg)](https://www.npmjs.org/package/terra-date-picker) | :white_check_mark: |
| [terra-demographics-banner](https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner) | [![NPM version](http://img.shields.io/npm/v/terra-demographics-banner.svg)](https://www.npmjs.org/package/terra-demographics-banner) | :white_check_mark: |
| [terra-form](https://github.com/cerner/terra-core/tree/master/packages/terra-form) | [![NPM version](http://img.shields.io/npm/v/terra-form.svg)](https://www.npmjs.org/package/terra-form) | :white_check_mark: |
| [terra-grid](https://github.com/cerner/terra-core/tree/master/packages/terra-grid) | [![NPM version](http://img.shields.io/npm/v/terra-grid.svg)](https://www.npmjs.org/package/terra-grid) | :white_check_mark: |
| [terra-heading](https://github.com/cerner/terra-core/tree/master/packages/terra-heading) | [![NPM version](http://img.shields.io/npm/v/terra-heading.svg)](https://www.npmjs.org/package/terra-heading) | :white_check_mark: |
| [terra-i18n](https://github.com/cerner/terra-core/tree/master/packages/terra-i18n) | [![NPM version](http://img.shields.io/npm/v/terra-i18n.svg)](https://www.npmjs.org/package/terra-i18n) | :white_check_mark: |
| [terra-i18n-plugin](https://github.com/cerner/terra-core/tree/master/packages/terra-i18n-plugin) | [![NPM version](http://img.shields.io/npm/v/terra-i18n-plugin.svg)](https://www.npmjs.org/package/terra-i18n-plugin) | :white_check_mark: |
| [terra-icon](https://github.com/cerner/terra-core/tree/master/packages/terra-icon) | [![NPM version](http://img.shields.io/npm/v/terra-icon.svg)](https://www.npmjs.org/package/terra-icon) | :white_check_mark: |
| [terra-image](https://github.com/cerner/terra-core/tree/master/packages/terra-image) | [![NPM version](http://img.shields.io/npm/v/terra-image.svg)](https://www.npmjs.org/package/terra-image) | :white_check_mark: |
| [terra-legacy-theme](https://github.com/cerner/terra-core/tree/master/packages/terra-legacy-theme) | [![NPM version](http://img.shields.io/npm/v/terra-legacy-theme.svg)](https://www.npmjs.org/package/terra-legacy-theme) | :white_check_mark: |
| [terra-list](https://github.com/cerner/terra-core/tree/master/packages/terra-list) | [![NPM version](http://img.shields.io/npm/v/terra-list.svg)](https://www.npmjs.org/package/terra-list) | :white_check_mark: |
| [terra-markdown](https://github.com/cerner/terra-core/tree/master/packages/terra-markdown) | [![NPM version](http://img.shields.io/npm/v/terra-markdown.svg)](https://www.npmjs.org/package/terra-markdown) | :white_check_mark: |
| terra-menu | [![NPM version](http://img.shields.io/npm/v/terra-menu.svg)](https://www.npmjs.org/package/terra-menu) | :x: |
| [terra-mixins](https://github.com/cerner/terra-core/tree/master/packages/terra-mixins) | [![NPM version](http://img.shields.io/npm/v/terra-mixins.svg)](https://www.npmjs.org/package/terra-mixins) | :white_check_mark: |
| [terra-modal](https://github.com/cerner/terra-core/tree/master/packages/terra-modal) | [![NPM version](http://img.shields.io/npm/v/terra-modal.svg)](https://www.npmjs.org/package/terra-modal) | :white_check_mark: |
| [terra-modal-manager](https://github.com/cerner/terra-core/tree/master/packages/terra-modal-manager) | [![NPM version](http://img.shields.io/npm/v/terra-modal-manager.svg)](https://www.npmjs.org/package/terra-modal-manager) | :white_check_mark: |
| [terra-overlay](https://github.com/cerner/terra-core/tree/master/packages/terra-overlay) | [![NPM version](http://img.shields.io/npm/v/terra-overlay.svg)](https://www.npmjs.org/package/terra-overlay) | :white_check_mark: |
| [terra-popup](https://github.com/cerner/terra-core/tree/master/packages/terra-popup) | [![NPM version](http://img.shields.io/npm/v/terra-popup.svg)](https://www.npmjs.org/package/terra-popup) | :white_check_mark: |
| [terra-progress-bar](https://github.com/cerner/terra-core/tree/master/packages/terra-progress-bar) | [![NPM version](http://img.shields.io/npm/v/terra-progress-bar.svg)](https://www.npmjs.org/package/terra-progress-bar) | :white_check_mark: |
| [terra-props-table](https://github.com/cerner/terra-core/tree/master/packages/terra-props-table)  | [![NPM version](http://img.shields.io/npm/v/terra-props-table.svg)](https://www.npmjs.org/package/terra-props-table) | :white_check_mark: |
| [terra-responsive-element](https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element) | [![NPM version](http://img.shields.io/npm/v/terra-responsive-element.svg)](https://www.npmjs.org/package/terra-responsive-element) | :white_check_mark: |
| [terra-search-field](https://github.com/cerner/terra-core/tree/master/packages/terra-search-field) | [![NPM version](http://img.shields.io/npm/v/terra-search-field.svg)](https://www.npmjs.org/package/terra-search-field) | :white_check_mark: |
| [terra-slide-group](https://github.com/cerner/terra-core/tree/master/packages/terra-slide-group) | [![NPM version](http://img.shields.io/npm/v/terra-slide-group.svg)](https://www.npmjs.org/package/terra-slide-group) | :white_check_mark: |
| [terra-slide-panel](https://github.com/cerner/terra-core/tree/master/packages/terra-slide-panel) | [![NPM version](http://img.shields.io/npm/v/terra-slide-panel.svg)](https://www.npmjs.org/package/terra-slide-panel) | :white_check_mark: |
| [terra-status](https://github.com/cerner/terra-core/tree/master/packages/terra-status) | [![NPM version](http://img.shields.io/npm/v/terra-status.svg)](https://www.npmjs.org/package/terra-status) | :white_check_mark: |
| [terra-table](https://github.com/cerner/terra-core/tree/master/packages/terra-table) | [![NPM version](http://img.shields.io/npm/v/terra-table.svg)](https://www.npmjs.org/package/terra-table) | :white_check_mark: |
| [terra-text](https://github.com/cerner/terra-core/tree/master/packages/terra-text) | [![NPM version](http://img.shields.io/npm/v/terra-text.svg)](https://www.npmjs.org/package/terra-text) | :white_check_mark: |
| [terra-time-input](https://github.com/cerner/terra-core/tree/master/packages/terra-time-input) | [![NPM version](http://img.shields.io/npm/v/terra-time-input.svg)](https://www.npmjs.org/package/terra-time-input) | :white_check_mark: |
| [terra-toggle](https://github.com/cerner/terra-core/tree/master/packages/terra-toggle) | [![NPM version](http://img.shields.io/npm/v/terra-toggle.svg)](https://www.npmjs.org/package/terra-toggle) | :white_check_mark: |
| [terra-toggle-button](https://github.com/cerner/terra-core/tree/master/packages/terra-toggle-button) | [![NPM version](http://img.shields.io/npm/v/terra-toggle-button.svg)](https://www.npmjs.org/package/terra-toggle-button) | :white_check_mark: |

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
2. Install and config `terra-i18n-plugin`:
    - Follow [terra-i18n-plugin Getting Started](packages/terra-i18n-plugin#getting-started) to install `terra-i18n-plugin` to aggregate translations in `node_modules`.
    - Follow [terra-i18n-plugin Wiki Guide](https://github.com/cerner/terra-core/wiki/Terra-i18n-plugin-Guide) to config i18n plugin.
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

- [terra-date-picker](https://github.com/cerner/terra-core/tree/master/packages/terra-date-picker)
- [terra-demographics-banner](https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner)
- [terra-overlay](https://github.com/cerner/terra-core/tree/master/packages/terra-overlay)

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

## LICENSE

Copyright 2017 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
