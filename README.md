<!-- Logo -->
<p align="center">
  <img height="128" width="128" src="https://github.com/cerner/terra-core/raw/master/terra.png">
</p>

<!-- Name -->
<h1 align="center">
  Terra Core
</h1>

[![Cerner OSS](https://badgen.net/badge/Cerner/OSS/blue)](http://engineering.cerner.com/2014/01/cerner-and-open-source/)
[![License](https://badgen.net/github/license/cerner/terra-core)](https://github.com/cerner/terra-core/blob/master/LICENSE)
[![Build Status](https://badgen.net/travis/cerner/terra-core)](https://travis-ci.org/cerner/terra-core)
[![devDependencies status](https://badgen.net/david/dev/cerner/terra-core)](https://david-dm.org/cerner/terra-core?type=dev)
[![lerna](https://badgen.net/badge/maintained%20with/lerna/cc00ff)](https://lernajs.io/)

[![Dependency Status](https://img.shields.io/david/cerner/terra-framework.svg?path=packages/terra-hookshot)](https://david-dm.org/cerner/terra-framework?path=packages/terra-hookshot)


[![Dependency Status](https://badgen.net/david/cerner/terra-framework?path=packages/terra-hookshot)](https://david-dm.org/cerner/terra-framework?path=packages/terra-hookshot)

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
![Stable](https://badgen.net/badge/status/Stable/green)
![Beta](https://badgen.net/badge/status/Beta/orange)
![Deprecated](https://badgen.net/badge/status/Deprecated/grey)


| Terra Package      | Version | Status |
|--------------------|---------|--------|
| [terra-abstract-modal](https://github.com/cerner/terra-core/tree/master/packages/terra-abstract-modal) | [![NPM version](https://badgen.net/npm/v/terra-abstract-modal)](https://www.npmjs.org/package/terra-abstract-modal) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-action-footer](https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer) | [![NPM version](https://badgen.net/npm/v/terra-action-footer)](https://www.npmjs.org/package/terra-action-footer) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-action-header](https://github.com/cerner/terra-core/tree/master/packages/terra-action-header) | [![NPM version](https://badgen.net/npm/v/terra-action-header)](https://www.npmjs.org/package/terra-action-header) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-alert](https://github.com/cerner/terra-core/tree/master/packages/terra-alert) | [![NPM version](https://badgen.net/npm/v/terra-alert)](https://www.npmjs.org/package/terra-alert) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-arrange](https://github.com/cerner/terra-core/tree/master/packages/terra-arrange) | [![NPM version](https://badgen.net/npm/v/terra-arrange)](https://www.npmjs.org/package/terra-arrange) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-avatar](https://github.com/cerner/terra-core/tree/master/packages/terra-avatar) | [![NPM version](https://badgen.net/npm/v/terra-avatar)](https://www.npmjs.org/package/terra-avatar) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| terra-application | [![NPM version](https://badgen.net/npm/v/terra-application)](https://www.npmjs.org/package/terra-application) | ![Stable](https://badgen.net/badge/status/Deprecated/grey) |
| [terra-badge](https://github.com/cerner/terra-core/tree/master/packages/terra-badge) | [![NPM version](https://badgen.net/npm/v/terra-badge)](https://www.npmjs.org/package/terra-badge) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-base](https://github.com/cerner/terra-core/tree/master/packages/terra-base) | [![NPM version](https://badgen.net/npm/v/terra-base)](https://www.npmjs.org/package/terra-base) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-button](https://github.com/cerner/terra-core/tree/master/packages/terra-button) | [![NPM version](https://badgen.net/npm/v/terra-button)](https://www.npmjs.org/package/terra-button) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-button-group](https://github.com/cerner/terra-core/tree/master/packages/terra-button-group) | [![NPM version](https://badgen.net/npm/v/terra-button-group)](https://www.npmjs.org/package/terra-button-group) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-card](https://github.com/cerner/terra-core/tree/master/packages/terra-card) | [![NPM version](https://badgen.net/npm/v/terra-card)](https://www.npmjs.org/package/terra-card) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-collapsible-menu-view](https://github.com/cerner/terra-core/tree/master/packages/terra-collapsible-menu-view) | [![NPM version](https://badgen.net/npm/v/terra-collapsible-menu-view)](https://www.npmjs.org/package/terra-collapsible-menu-view) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-content-container](https://github.com/cerner/terra-core/tree/master/packages/terra-content-container) | [![NPM version](https://badgen.net/npm/v/terra-content-container)](https://www.npmjs.org/package/terra-content-container) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-date-picker](https://github.com/cerner/terra-core/tree/master/packages/terra-date-picker) | [![NPM version](https://badgen.net/npm/v/terra-date-picker)](https://www.npmjs.org/package/terra-date-picker) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-date-time-picker](https://github.com/cerner/terra-core/tree/master/packages/terra-date-time-picker) | [![NPM version](https://badgen.net/npm/v/terra-date-time-picker)](https://www.npmjs.org/package/terra-date-time-picker) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-demographics-banner](https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner) | [![NPM version](https://badgen.net/npm/v/terra-demographics-banner)](https://www.npmjs.org/package/terra-demographics-banner) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-dialog](https://github.com/cerner/terra-core/tree/master/packages/terra-dialog) | [![NPM version](https://badgen.net/npm/v/terra-dialog)](https://www.npmjs.org/package/terra-dialog) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-divider](https://github.com/cerner/terra-core/tree/master/packages/terra-divider) | [![NPM version](https://badgen.net/npm/v/terra-divider)](https://www.npmjs.org/package/terra-divider) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-doc-template](https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template) | [![NPM version](https://badgen.net/npm/v/terra-doc-template)](https://www.npmjs.org/package/terra-doc-template) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-dynamic-grid](https://github.com/cerner/terra-core/tree/master/packages/terra-dynamic-grid) | [![NPM version](https://badgen.net/npm/v/terra-dynamic-grid)](https://www.npmjs.org/package/terra-dynamic-grid) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-embedded-content-consumer](https://github.com/cerner/terra-core/tree/master/packages/terra-embedded-content-consumer) | [![NPM version](https://badgen.net/npm/v/terra-embedded-content-consumer)](https://www.npmjs.org/package/terra-embedded-content-consumer) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| terra-form | [![NPM version](https://badgen.net/npm/v/terra-form)](https://www.npmjs.org/package/terra-form) | ![Stable](https://badgen.net/badge/status/Deprecated/grey) |
| [terra-form-field](https://github.com/cerner/terra-core/tree/master/packages/terra-form-field) | [![NPM version](https://badgen.net/npm/v/terra-form-field)](https://www.npmjs.org/package/terra-form-field) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-form-fieldset](https://github.com/cerner/terra-core/tree/master/packages/terra-form-fieldset) | [![NPM version](https://badgen.net/npm/v/terra-form-fieldset)](https://www.npmjs.org/package/terra-form-fieldset) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-form-input](https://github.com/cerner/terra-core/tree/master/packages/terra-form-input) | [![NPM version](https://badgen.net/npm/v/terra-form-input)](https://www.npmjs.org/package/terra-form-input) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-form-radio](https://github.com/cerner/terra-core/tree/master/packages/terra-form-radio) | [![NPM version](https://badgen.net/npm/v/terra-form-radio)](https://www.npmjs.org/package/terra-form-radio) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-form-select](https://github.com/cerner/terra-core/tree/master/packages/terra-form-select) | [![NPM version](https://badgen.net/npm/v/terra-form-select)](https://www.npmjs.org/package/terra-form-select) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-form-textarea](https://github.com/cerner/terra-core/tree/master/packages/terra-form-textarea) | [![NPM version](https://badgen.net/npm/v/terra-form-textarea)](https://www.npmjs.org/package/terra-form-textarea) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-grid](https://github.com/cerner/terra-core/tree/master/packages/terra-grid) | [![NPM version](https://badgen.net/npm/v/terra-grid)](https://www.npmjs.org/package/terra-grid) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-heading](https://github.com/cerner/terra-core/tree/master/packages/terra-heading) | [![NPM version](https://badgen.net/npm/v/terra-heading)](https://www.npmjs.org/package/terra-heading) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-i18n](https://github.com/cerner/terra-core/tree/master/packages/terra-i18n) | [![NPM version](https://badgen.net/npm/v/terra-i18n)](https://www.npmjs.org/package/terra-i18n) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| terra-i18n-plugin | [![NPM version](https://badgen.net/npm/v/terra-i18n-plugin)](https://www.npmjs.org/package/terra-i18n-plugin) | ![Stable](https://badgen.net/badge/status/Deprecated/grey) |
| [terra-icon](https://github.com/cerner/terra-core/tree/master/packages/terra-icon) | [![NPM version](https://badgen.net/npm/v/terra-icon)](https://www.npmjs.org/package/terra-icon) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-image](https://github.com/cerner/terra-core/tree/master/packages/terra-image) | [![NPM version](https://badgen.net/npm/v/terra-image)](https://www.npmjs.org/package/terra-image) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-legacy-theme](https://github.com/cerner/terra-core/tree/master/packages/terra-legacy-theme) | [![NPM version](https://badgen.net/npm/v/terra-legacy-theme)](https://www.npmjs.org/package/terra-legacy-theme) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-list](https://github.com/cerner/terra-core/tree/master/packages/terra-list) | [![NPM version](https://badgen.net/npm/v/terra-list)](https://www.npmjs.org/package/terra-list) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-markdown](https://github.com/cerner/terra-core/tree/master/packages/terra-markdown) | [![NPM version](https://badgen.net/npm/v/terra-markdown)](https://www.npmjs.org/package/terra-markdown) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-menu](https://github.com/cerner/terra-core/tree/master/packages/terra-menu) | [![NPM version](https://badgen.net/npm/v/terra-menu)](https://www.npmjs.org/package/terra-menu) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-mixins](https://github.com/cerner/terra-core/tree/master/packages/terra-mixins) | [![NPM version](https://badgen.net/npm/v/terra-mixins)](https://www.npmjs.org/package/terra-mixins) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| terra-modal | [![NPM version](https://badgen.net/npm/v/terra-modal)](https://www.npmjs.org/package/terra-modal) | ![Stable](https://badgen.net/badge/status/Deprecated/grey) |
| [terra-overlay](https://github.com/cerner/terra-core/tree/master/packages/terra-overlay) | [![NPM version](https://badgen.net/npm/v/terra-overlay)](https://www.npmjs.org/package/terra-overlay) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-paginator](https://github.com/cerner/terra-core/tree/master/packages/terra-paginator) | [![NPM version](https://badgen.net/npm/v/terra-menu)](https://www.npmjs.org/package/terra-paginator) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-profile-image](https://github.com/cerner/terra-core/tree/master/packages/terra-profile-image) | [![NPM version](https://badgen.net/npm/v/terra-profile-image)](https://www.npmjs.org/package/terra-profile-image) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-progress-bar](https://github.com/cerner/terra-core/tree/master/packages/terra-progress-bar) | [![NPM version](https://badgen.net/npm/v/terra-progress-bar)](https://www.npmjs.org/package/terra-progress-bar) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-props-table](https://github.com/cerner/terra-core/tree/master/packages/terra-props-table)  | [![NPM version](https://badgen.net/npm/v/terra-props-table)](https://www.npmjs.org/package/terra-props-table) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-responsive-element](https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element) | [![NPM version](https://badgen.net/npm/v/terra-responsive-element)](https://www.npmjs.org/package/terra-responsive-element) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-search-field](https://github.com/cerner/terra-core/tree/master/packages/terra-search-field) | [![NPM version](https://badgen.net/npm/v/terra-search-field)](https://www.npmjs.org/package/terra-search-field) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-slide-group](https://github.com/cerner/terra-core/tree/master/packages/terra-slide-group) | [![NPM version](https://badgen.net/npm/v/terra-slide-group)](https://www.npmjs.org/package/terra-slide-group) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-section-header](https://github.com/cerner/terra-core/tree/master/packages/terra-section-header) | [![NPM version](https://badgen.net/npm/v/terra-section-header)](https://www.npmjs.org/package/terra-section-header) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-signature](https://github.com/cerner/terra-core/tree/master/packages/terra-signature) | [![NPM version](https://badgen.net/npm/v/terra-signature)](https://www.npmjs.org/package/terra-signature) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-slide-group](https://github.com/cerner/terra-core/tree/master/packages/terra-slide-group) | [![NPM version](https://badgen.net/npm/v/terra-slide-group)](https://www.npmjs.org/package/terra-slide-group) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-spacer](https://github.com/cerner/terra-core/tree/master/packages/terra-spacer) | [![NPM version](https://badgen.net/npm/v/terra-spacer)](https://www.npmjs.org/package/terra-spacer) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-status](https://github.com/cerner/terra-core/tree/master/packages/terra-status) | [![NPM version](https://badgen.net/npm/v/terra-status)](https://www.npmjs.org/package/terra-status) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-status-view](https://github.com/cerner/terra-core/tree/master/packages/terra-status-view) | [![NPM version](https://badgen.net/npm/v/terra-status-view)](https://www.npmjs.org/package/terra-status-view) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-table](https://github.com/cerner/terra-core/tree/master/packages/terra-table) | [![NPM version](https://badgen.net/npm/v/terra-table)](https://www.npmjs.org/package/terra-table) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-tabs](https://github.com/cerner/terra-core/tree/master/packages/terra-tabs) | [![NPM version](https://badgen.net/npm/v/terra-tabs)](https://www.npmjs.org/package/terra-tabs) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-tag](https://github.com/cerner/terra-core/tree/master/packages/terra-tag) | [![NPM version](https://badgen.net/npm/v/terra-tag)](https://www.npmjs.org/package/terra-tag) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-text](https://github.com/cerner/terra-core/tree/master/packages/terra-text) | [![NPM version](https://badgen.net/npm/v/terra-text)](https://www.npmjs.org/package/terra-text) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-time-input](https://github.com/cerner/terra-core/tree/master/packages/terra-time-input) | [![NPM version](https://badgen.net/npm/v/terra-time-input)](https://www.npmjs.org/package/terra-time-input) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-toggle](https://github.com/cerner/terra-core/tree/master/packages/terra-toggle) | [![NPM version](https://badgen.net/npm/v/terra-toggle)](https://www.npmjs.org/package/terra-toggle) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-toggle-button](https://github.com/cerner/terra-core/tree/master/packages/terra-toggle-button) | [![NPM version](https://badgen.net/npm/v/terra-toggle-button)](https://www.npmjs.org/package/terra-toggle-button) | ![Stable](https://badgen.net/badge/status/Stable/green) |
| [terra-toggle-section-header](https://github.com/cerner/terra-core/tree/master/packages/terra-toggle-section-header) | [![NPM version](https://badgen.net/npm/v/terra-toggle-section-header)](https://www.npmjs.org/package/terra-toggle-section-header) | ![Stable](https://badgen.net/badge/status/Stable/green) |
## Supported Browsers

| Browser                     | Version |
|-----------------------------|---------|
| Chrome & Chrome for Android | Current |
| Edge                        | Current |
| Firefox                     | Current |
| Internet Explorer           | 10 & 11 |
| Safari & Mobile Safari      | Current |

## Internationalization (I18n)
Please review [Terra's Internationalization documentation](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization) for more information. Included are directions on consumption and how internationalization is setup.

### Packages Requiring I18n

- [terra-action-header](https://github.com/cerner/terra-core/tree/master/packages/terra-action-header)
- [terra-alert](https://github.com/cerner/terra-core/tree/master/packages/terra-alert)
- [terra-collapsible-menu-view](https://github.com/cerner/terra-core/tree/master/packages/terra-collapsible-menu-view)
- [terra-date-picker](https://github.com/cerner/terra-core/tree/master/packages/terra-date-picker)
- [terra-date-time-picker](https://github.com/cerner/terra-core/tree/master/packages/terra-date-time-picker)
- [terra-demographics-banner](https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner)
- [terra-dialog](https://github.com/cerner/terra-core/tree/master/packages/terra-dialog)
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
