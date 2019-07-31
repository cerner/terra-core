<!-- Logo -->
<p align="center">
  <img alt="Terra Logo" height="128" width="128" src="https://github.com/cerner/terra-core/raw/master/terra.png">
</p>

<!-- Name -->
<h1 align="center">
  Terra Core
</h1>

[![Cerner OSS](https://badgen.net/badge/Cerner/OSS/blue)](http://engineering.cerner.com/2014/01/cerner-and-open-source/)
[![License](https://badgen.net/badge/license/Apache-2.0/blue)](https://github.com/cerner/terra-core/blob/master/LICENSE)
[![Build Status](https://badgen.net/travis/cerner/terra-core)](https://travis-ci.com/cerner/terra-core)
[![devDependencies status](https://badgen.net/david/dev/cerner/terra-core)](https://david-dm.org/cerner/terra-core?type=dev)
[![lerna](https://badgen.net/badge/maintained%20with/lerna/cc00ff)](https://lerna.js.org/)

- [Packages](#packages)
  - [Versioning](#versioning)
  - [Status](#status)
  - [Deprecated](#deprecated)
- [Supported Browsers](#supported-browsers)
- [Internationalization (I18n)](#internationalization-i18n)
  - [Packages Requiring I18n](#packages-requiring-i18n)
- [Contributing](#contributing)
- [Local Development](#local-development)
- [LICENSE](#license)

<h2 id="packages">
  Packages
</h2>

<h3 id="versioning">
  Versioning
</h3>

When a component reaches v1.0.0., it is considered to be stable and will follow [SemVer](http://semver.org/) for versioning.
1. MAJOR versions represent breaking changes
2. MINOR versions represent added functionality in a backwards-compatible manner
3. PATCH versions represent backwards-compatible bug fixes

Consult the component CHANGELOGs, related issues, and PRs for more information.

We view the React.js props API of our components as our main public API. We use this to guide us when versioning components.

Prior to components reaching v1.0.0, a component is considered to be in a beta stage.
Components in beta stage may include breaking changes, new features, and bug fixes all within v0.x.x releases.

<h3 id="status">
  Status
</h3>

![Stable](https://badgen.net/badge/status/Stable/green)
![Beta](https://badgen.net/badge/status/Beta/orange)
![Deprecated](https://badgen.net/badge/status/Deprecated/grey)

<!-- AUTO-GENERATED-CONTENT:START (SUBPACKAGELIST) -->
| Terra Package      | Version | Status | Dependencies |
|--------------------|---------|--------|--------------|
| [terra-action-footer](https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer) | [![NPM version](https://badgen.net/npm/v/terra-action-footer)](https://www.npmjs.org/package/terra-action-footer) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-action-footer](https://badgen.net/david/dep/cerner/terra-core/packages/terra-action-footer)](https://david-dm.org/cerner/terra-core?path=packages/terra-action-footer) |
| [terra-action-header](https://github.com/cerner/terra-core/tree/master/packages/terra-action-header) | [![NPM version](https://badgen.net/npm/v/terra-action-header)](https://www.npmjs.org/package/terra-action-header) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-action-header](https://badgen.net/david/dep/cerner/terra-core/packages/terra-action-header)](https://david-dm.org/cerner/terra-core?path=packages/terra-action-header) |
| [terra-alert](https://github.com/cerner/terra-core/tree/master/packages/terra-alert) | [![NPM version](https://badgen.net/npm/v/terra-alert)](https://www.npmjs.org/package/terra-alert) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-alert](https://badgen.net/david/dep/cerner/terra-core/packages/terra-alert)](https://david-dm.org/cerner/terra-core?path=packages/terra-alert) |
| [terra-arrange](https://github.com/cerner/terra-core/tree/master/packages/terra-arrange) | [![NPM version](https://badgen.net/npm/v/terra-arrange)](https://www.npmjs.org/package/terra-arrange) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-arrange](https://badgen.net/david/dep/cerner/terra-core/packages/terra-arrange)](https://david-dm.org/cerner/terra-core?path=packages/terra-arrange) |
| [terra-avatar](https://github.com/cerner/terra-core/tree/master/packages/terra-avatar) | [![NPM version](https://badgen.net/npm/v/terra-avatar)](https://www.npmjs.org/package/terra-avatar) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-avatar](https://badgen.net/david/dep/cerner/terra-core/packages/terra-avatar)](https://david-dm.org/cerner/terra-core?path=packages/terra-avatar) |
| [terra-badge](https://github.com/cerner/terra-core/tree/master/packages/terra-badge) | [![NPM version](https://badgen.net/npm/v/terra-badge)](https://www.npmjs.org/package/terra-badge) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-badge](https://badgen.net/david/dep/cerner/terra-core/packages/terra-badge)](https://david-dm.org/cerner/terra-core?path=packages/terra-badge) |
| [terra-base](https://github.com/cerner/terra-core/tree/master/packages/terra-base) | [![NPM version](https://badgen.net/npm/v/terra-base)](https://www.npmjs.org/package/terra-base) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-base](https://badgen.net/david/dep/cerner/terra-core/packages/terra-base)](https://david-dm.org/cerner/terra-core?path=packages/terra-base) |
| [terra-breakpoints](https://github.com/cerner/terra-core/tree/master/packages/terra-breakpoints) | [![NPM version](https://badgen.net/npm/v/terra-breakpoints)](https://www.npmjs.org/package/terra-breakpoints) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-breakpoints](https://badgen.net/david/dep/cerner/terra-core/packages/terra-breakpoints)](https://david-dm.org/cerner/terra-core?path=packages/terra-breakpoints) |
| [terra-button](https://github.com/cerner/terra-core/tree/master/packages/terra-button) | [![NPM version](https://badgen.net/npm/v/terra-button)](https://www.npmjs.org/package/terra-button) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-button](https://badgen.net/david/dep/cerner/terra-core/packages/terra-button)](https://david-dm.org/cerner/terra-core?path=packages/terra-button) |
| [terra-button-group](https://github.com/cerner/terra-core/tree/master/packages/terra-button-group) | [![NPM version](https://badgen.net/npm/v/terra-button-group)](https://www.npmjs.org/package/terra-button-group) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-button-group](https://badgen.net/david/dep/cerner/terra-core/packages/terra-button-group)](https://david-dm.org/cerner/terra-core?path=packages/terra-button-group) |
| [terra-card](https://github.com/cerner/terra-core/tree/master/packages/terra-card) | [![NPM version](https://badgen.net/npm/v/terra-card)](https://www.npmjs.org/package/terra-card) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-card](https://badgen.net/david/dep/cerner/terra-core/packages/terra-card)](https://david-dm.org/cerner/terra-core?path=packages/terra-card) |
| [terra-content-container](https://github.com/cerner/terra-core/tree/master/packages/terra-content-container) | [![NPM version](https://badgen.net/npm/v/terra-content-container)](https://www.npmjs.org/package/terra-content-container) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-content-container](https://badgen.net/david/dep/cerner/terra-core/packages/terra-content-container)](https://david-dm.org/cerner/terra-core?path=packages/terra-content-container) |
| [terra-demographics-banner](https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner) | [![NPM version](https://badgen.net/npm/v/terra-demographics-banner)](https://www.npmjs.org/package/terra-demographics-banner) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-demographics-banner](https://badgen.net/david/dep/cerner/terra-core/packages/terra-demographics-banner)](https://david-dm.org/cerner/terra-core?path=packages/terra-demographics-banner) |
| [terra-dialog](https://github.com/cerner/terra-core/tree/master/packages/terra-dialog) | [![NPM version](https://badgen.net/npm/v/terra-dialog)](https://www.npmjs.org/package/terra-dialog) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-dialog](https://badgen.net/david/dep/cerner/terra-core/packages/terra-dialog)](https://david-dm.org/cerner/terra-core?path=packages/terra-dialog) |
| [terra-divider](https://github.com/cerner/terra-core/tree/master/packages/terra-divider) | [![NPM version](https://badgen.net/npm/v/terra-divider)](https://www.npmjs.org/package/terra-divider) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-divider](https://badgen.net/david/dep/cerner/terra-core/packages/terra-divider)](https://david-dm.org/cerner/terra-core?path=packages/terra-divider) |
| [terra-doc-template](https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template) | [![NPM version](https://badgen.net/npm/v/terra-doc-template)](https://www.npmjs.org/package/terra-doc-template) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-doc-template](https://badgen.net/david/dep/cerner/terra-core/packages/terra-doc-template)](https://david-dm.org/cerner/terra-core?path=packages/terra-doc-template) |
| [terra-dropdown-button](https://github.com/cerner/terra-core/tree/master/packages/terra-dropdown-button) | [![NPM version](https://badgen.net/npm/v/terra-dropdown-button)](https://www.npmjs.org/package/terra-dropdown-button) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-dropdown-button](https://badgen.net/david/dep/cerner/terra-core/packages/terra-dropdown-button)](https://david-dm.org/cerner/terra-core?path=packages/terra-dropdown-button) |
| [terra-dynamic-grid](https://github.com/cerner/terra-core/tree/master/packages/terra-dynamic-grid) | [![NPM version](https://badgen.net/npm/v/terra-dynamic-grid)](https://www.npmjs.org/package/terra-dynamic-grid) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-dynamic-grid](https://badgen.net/david/dep/cerner/terra-core/packages/terra-dynamic-grid)](https://david-dm.org/cerner/terra-core?path=packages/terra-dynamic-grid) |
| [terra-form-checkbox](https://github.com/cerner/terra-core/tree/master/packages/terra-form-checkbox) | [![NPM version](https://badgen.net/npm/v/terra-form-checkbox)](https://www.npmjs.org/package/terra-form-checkbox) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-form-checkbox](https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-checkbox)](https://david-dm.org/cerner/terra-core?path=packages/terra-form-checkbox) |
| [terra-form-field](https://github.com/cerner/terra-core/tree/master/packages/terra-form-field) | [![NPM version](https://badgen.net/npm/v/terra-form-field)](https://www.npmjs.org/package/terra-form-field) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-form-field](https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-field)](https://david-dm.org/cerner/terra-core?path=packages/terra-form-field) |
| [terra-form-fieldset](https://github.com/cerner/terra-core/tree/master/packages/terra-form-fieldset) | [![NPM version](https://badgen.net/npm/v/terra-form-fieldset)](https://www.npmjs.org/package/terra-form-fieldset) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-form-fieldset](https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-fieldset)](https://david-dm.org/cerner/terra-core?path=packages/terra-form-fieldset) |
| [terra-form-input](https://github.com/cerner/terra-core/tree/master/packages/terra-form-input) | [![NPM version](https://badgen.net/npm/v/terra-form-input)](https://www.npmjs.org/package/terra-form-input) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-form-input](https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-input)](https://david-dm.org/cerner/terra-core?path=packages/terra-form-input) |
| [terra-form-radio](https://github.com/cerner/terra-core/tree/master/packages/terra-form-radio) | [![NPM version](https://badgen.net/npm/v/terra-form-radio)](https://www.npmjs.org/package/terra-form-radio) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-form-radio](https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-radio)](https://david-dm.org/cerner/terra-core?path=packages/terra-form-radio) |
| [terra-form-select](https://github.com/cerner/terra-core/tree/master/packages/terra-form-select) | [![NPM version](https://badgen.net/npm/v/terra-form-select)](https://www.npmjs.org/package/terra-form-select) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-form-select](https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-select)](https://david-dm.org/cerner/terra-core?path=packages/terra-form-select) |
| [terra-form-textarea](https://github.com/cerner/terra-core/tree/master/packages/terra-form-textarea) | [![NPM version](https://badgen.net/npm/v/terra-form-textarea)](https://www.npmjs.org/package/terra-form-textarea) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-form-textarea](https://badgen.net/david/dep/cerner/terra-core/packages/terra-form-textarea)](https://david-dm.org/cerner/terra-core?path=packages/terra-form-textarea) |
| [terra-grid](https://github.com/cerner/terra-core/tree/master/packages/terra-grid) | [![NPM version](https://badgen.net/npm/v/terra-grid)](https://www.npmjs.org/package/terra-grid) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-grid](https://badgen.net/david/dep/cerner/terra-core/packages/terra-grid)](https://david-dm.org/cerner/terra-core?path=packages/terra-grid) |
| [terra-header](https://github.com/cerner/terra-core/tree/master/packages/terra-header) | [![NPM version](https://badgen.net/npm/v/terra-header)](https://www.npmjs.org/package/terra-header) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-header](https://badgen.net/david/dep/cerner/terra-core/packages/terra-header)](https://david-dm.org/cerner/terra-core?path=packages/terra-header) |
| [terra-heading](https://github.com/cerner/terra-core/tree/master/packages/terra-heading) | [![NPM version](https://badgen.net/npm/v/terra-heading)](https://www.npmjs.org/package/terra-heading) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-heading](https://badgen.net/david/dep/cerner/terra-core/packages/terra-heading)](https://david-dm.org/cerner/terra-core?path=packages/terra-heading) |
| [terra-hyperlink](https://github.com/cerner/terra-core/tree/master/packages/terra-hyperlink) | [![NPM version](https://badgen.net/npm/v/terra-hyperlink)](https://www.npmjs.org/package/terra-hyperlink) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-hyperlink](https://badgen.net/david/dep/cerner/terra-core/packages/terra-hyperlink)](https://david-dm.org/cerner/terra-core?path=packages/terra-hyperlink) |
| [terra-i18n](https://github.com/cerner/terra-core/tree/master/packages/terra-i18n) | [![NPM version](https://badgen.net/npm/v/terra-i18n)](https://www.npmjs.org/package/terra-i18n) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-i18n](https://badgen.net/david/dep/cerner/terra-core/packages/terra-i18n)](https://david-dm.org/cerner/terra-core?path=packages/terra-i18n) |
| [terra-icon](https://github.com/cerner/terra-core/tree/master/packages/terra-icon) | [![NPM version](https://badgen.net/npm/v/terra-icon)](https://www.npmjs.org/package/terra-icon) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-icon](https://badgen.net/david/dep/cerner/terra-core/packages/terra-icon)](https://david-dm.org/cerner/terra-core?path=packages/terra-icon) |
| [terra-image](https://github.com/cerner/terra-core/tree/master/packages/terra-image) | [![NPM version](https://badgen.net/npm/v/terra-image)](https://www.npmjs.org/package/terra-image) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-image](https://badgen.net/david/dep/cerner/terra-core/packages/terra-image)](https://david-dm.org/cerner/terra-core?path=packages/terra-image) |
| [terra-legacy-theme](https://github.com/cerner/terra-core/tree/master/packages/terra-legacy-theme) | [![NPM version](https://badgen.net/npm/v/terra-legacy-theme)](https://www.npmjs.org/package/terra-legacy-theme) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-legacy-theme](https://badgen.net/david/dep/cerner/terra-core/packages/terra-legacy-theme)](https://david-dm.org/cerner/terra-core?path=packages/terra-legacy-theme) |
| [terra-list](https://github.com/cerner/terra-core/tree/master/packages/terra-list) | [![NPM version](https://badgen.net/npm/v/terra-list)](https://www.npmjs.org/package/terra-list) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-list](https://badgen.net/david/dep/cerner/terra-core/packages/terra-list)](https://david-dm.org/cerner/terra-core?path=packages/terra-list) |
| [terra-markdown](https://github.com/cerner/terra-core/tree/master/packages/terra-markdown) | [![NPM version](https://badgen.net/npm/v/terra-markdown)](https://www.npmjs.org/package/terra-markdown) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-markdown](https://badgen.net/david/dep/cerner/terra-core/packages/terra-markdown)](https://david-dm.org/cerner/terra-core?path=packages/terra-markdown) |
| [terra-mixins](https://github.com/cerner/terra-core/tree/master/packages/terra-mixins) | [![NPM version](https://badgen.net/npm/v/terra-mixins)](https://www.npmjs.org/package/terra-mixins) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-mixins](https://badgen.net/david/dep/cerner/terra-core/packages/terra-mixins)](https://david-dm.org/cerner/terra-core?path=packages/terra-mixins) |
| [terra-overlay](https://github.com/cerner/terra-core/tree/master/packages/terra-overlay) | [![NPM version](https://badgen.net/npm/v/terra-overlay)](https://www.npmjs.org/package/terra-overlay) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-overlay](https://badgen.net/david/dep/cerner/terra-core/packages/terra-overlay)](https://david-dm.org/cerner/terra-core?path=packages/terra-overlay) |
| [terra-paginator](https://github.com/cerner/terra-core/tree/master/packages/terra-paginator) | [![NPM version](https://badgen.net/npm/v/terra-paginator)](https://www.npmjs.org/package/terra-paginator) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-paginator](https://badgen.net/david/dep/cerner/terra-core/packages/terra-paginator)](https://david-dm.org/cerner/terra-core?path=packages/terra-paginator) |
| [terra-profile-image](https://github.com/cerner/terra-core/tree/master/packages/terra-profile-image) | [![NPM version](https://badgen.net/npm/v/terra-profile-image)](https://www.npmjs.org/package/terra-profile-image) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-profile-image](https://badgen.net/david/dep/cerner/terra-core/packages/terra-profile-image)](https://david-dm.org/cerner/terra-core?path=packages/terra-profile-image) |
| [terra-progress-bar](https://github.com/cerner/terra-core/tree/master/packages/terra-progress-bar) | [![NPM version](https://badgen.net/npm/v/terra-progress-bar)](https://www.npmjs.org/package/terra-progress-bar) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-progress-bar](https://badgen.net/david/dep/cerner/terra-core/packages/terra-progress-bar)](https://david-dm.org/cerner/terra-core?path=packages/terra-progress-bar) |
| [terra-props-table](https://github.com/cerner/terra-core/tree/master/packages/terra-props-table) | [![NPM version](https://badgen.net/npm/v/terra-props-table)](https://www.npmjs.org/package/terra-props-table) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-props-table](https://badgen.net/david/dep/cerner/terra-core/packages/terra-props-table)](https://david-dm.org/cerner/terra-core?path=packages/terra-props-table) |
| [terra-responsive-element](https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element) | [![NPM version](https://badgen.net/npm/v/terra-responsive-element)](https://www.npmjs.org/package/terra-responsive-element) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-responsive-element](https://badgen.net/david/dep/cerner/terra-core/packages/terra-responsive-element)](https://david-dm.org/cerner/terra-core?path=packages/terra-responsive-element) |
| [terra-scroll](https://github.com/cerner/terra-core/tree/master/packages/terra-scroll) | [![NPM version](https://badgen.net/npm/v/terra-scroll)](https://www.npmjs.org/package/terra-scroll) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-scroll](https://badgen.net/david/dep/cerner/terra-core/packages/terra-scroll)](https://david-dm.org/cerner/terra-core?path=packages/terra-scroll) |
| [terra-search-field](https://github.com/cerner/terra-core/tree/master/packages/terra-search-field) | [![NPM version](https://badgen.net/npm/v/terra-search-field)](https://www.npmjs.org/package/terra-search-field) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-search-field](https://badgen.net/david/dep/cerner/terra-core/packages/terra-search-field)](https://david-dm.org/cerner/terra-core?path=packages/terra-search-field) |
| [terra-section-header](https://github.com/cerner/terra-core/tree/master/packages/terra-section-header) | [![NPM version](https://badgen.net/npm/v/terra-section-header)](https://www.npmjs.org/package/terra-section-header) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-section-header](https://badgen.net/david/dep/cerner/terra-core/packages/terra-section-header)](https://david-dm.org/cerner/terra-core?path=packages/terra-section-header) |
| [terra-show-hide](https://github.com/cerner/terra-core/tree/master/packages/terra-show-hide) | [![NPM version](https://badgen.net/npm/v/terra-show-hide)](https://www.npmjs.org/package/terra-show-hide) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-show-hide](https://badgen.net/david/dep/cerner/terra-core/packages/terra-show-hide)](https://david-dm.org/cerner/terra-core?path=packages/terra-show-hide) |
| [terra-signature](https://github.com/cerner/terra-core/tree/master/packages/terra-signature) | [![NPM version](https://badgen.net/npm/v/terra-signature)](https://www.npmjs.org/package/terra-signature) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-signature](https://badgen.net/david/dep/cerner/terra-core/packages/terra-signature)](https://david-dm.org/cerner/terra-core?path=packages/terra-signature) |
| [terra-spacer](https://github.com/cerner/terra-core/tree/master/packages/terra-spacer) | [![NPM version](https://badgen.net/npm/v/terra-spacer)](https://www.npmjs.org/package/terra-spacer) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-spacer](https://badgen.net/david/dep/cerner/terra-core/packages/terra-spacer)](https://david-dm.org/cerner/terra-core?path=packages/terra-spacer) |
| [terra-status](https://github.com/cerner/terra-core/tree/master/packages/terra-status) | [![NPM version](https://badgen.net/npm/v/terra-status)](https://www.npmjs.org/package/terra-status) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-status](https://badgen.net/david/dep/cerner/terra-core/packages/terra-status)](https://david-dm.org/cerner/terra-core?path=packages/terra-status) |
| [terra-status-view](https://github.com/cerner/terra-core/tree/master/packages/terra-status-view) | [![NPM version](https://badgen.net/npm/v/terra-status-view)](https://www.npmjs.org/package/terra-status-view) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-status-view](https://badgen.net/david/dep/cerner/terra-core/packages/terra-status-view)](https://david-dm.org/cerner/terra-core?path=packages/terra-status-view) |
| [terra-table](https://github.com/cerner/terra-core/tree/master/packages/terra-table) | [![NPM version](https://badgen.net/npm/v/terra-table)](https://www.npmjs.org/package/terra-table) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-table](https://badgen.net/david/dep/cerner/terra-core/packages/terra-table)](https://david-dm.org/cerner/terra-core?path=packages/terra-table) |
| [terra-tag](https://github.com/cerner/terra-core/tree/master/packages/terra-tag) | [![NPM version](https://badgen.net/npm/v/terra-tag)](https://www.npmjs.org/package/terra-tag) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-tag](https://badgen.net/david/dep/cerner/terra-core/packages/terra-tag)](https://david-dm.org/cerner/terra-core?path=packages/terra-tag) |
| [terra-text](https://github.com/cerner/terra-core/tree/master/packages/terra-text) | [![NPM version](https://badgen.net/npm/v/terra-text)](https://www.npmjs.org/package/terra-text) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-text](https://badgen.net/david/dep/cerner/terra-core/packages/terra-text)](https://david-dm.org/cerner/terra-core?path=packages/terra-text) |
| [terra-toggle](https://github.com/cerner/terra-core/tree/master/packages/terra-toggle) | [![NPM version](https://badgen.net/npm/v/terra-toggle)](https://www.npmjs.org/package/terra-toggle) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-toggle](https://badgen.net/david/dep/cerner/terra-core/packages/terra-toggle)](https://david-dm.org/cerner/terra-core?path=packages/terra-toggle) |
| [terra-toggle-button](https://github.com/cerner/terra-core/tree/master/packages/terra-toggle-button) | [![NPM version](https://badgen.net/npm/v/terra-toggle-button)](https://www.npmjs.org/package/terra-toggle-button) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-toggle-button](https://badgen.net/david/dep/cerner/terra-core/packages/terra-toggle-button)](https://david-dm.org/cerner/terra-core?path=packages/terra-toggle-button) |
| [terra-toggle-section-header](https://github.com/cerner/terra-core/tree/master/packages/terra-toggle-section-header) | [![NPM version](https://badgen.net/npm/v/terra-toggle-section-header)](https://www.npmjs.org/package/terra-toggle-section-header) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-toggle-section-header](https://badgen.net/david/dep/cerner/terra-core/packages/terra-toggle-section-header)](https://david-dm.org/cerner/terra-core?path=packages/terra-toggle-section-header) |
| [terra-visually-hidden-text](https://github.com/cerner/terra-core/tree/master/packages/terra-visually-hidden-text) | [![NPM version](https://badgen.net/npm/v/terra-visually-hidden-text)](https://www.npmjs.org/package/terra-visually-hidden-text) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![terra-visually-hidden-text](https://badgen.net/david/dep/cerner/terra-core/packages/terra-visually-hidden-text)](https://david-dm.org/cerner/terra-core?path=packages/terra-visually-hidden-text) |
<!-- AUTO-GENERATED-CONTENT:END *-->

<h3 id="deprecated">
  Deprecated
</h3>

| Terra Package      | Version | Status | Dependencies |
|--------------------|---------|--------|--------------|
| terra-form | [![NPM version](https://badgen.net/npm/v/terra-form)](https://www.npmjs.org/package/terra-form) | ![Deprecated](https://badgen.net/badge/status/Deprecated/grey) | ![terra-form](https://badgen.net/badge/dependencies/n%2Fa/grey) |
| terra-i18n-plugin | [![NPM version](https://badgen.net/npm/v/terra-i18n-plugin)](https://www.npmjs.org/package/terra-i18n-plugin) | ![Deprecated](https://badgen.net/badge/status/Deprecated/grey) | ![terra-i18n-plugin](https://badgen.net/badge/dependencies/n%2Fa/grey) |
| terra-modal | [![NPM version](https://badgen.net/npm/v/terra-modal)](https://www.npmjs.org/package/terra-modal) | ![Deprecated](https://badgen.net/badge/status/Deprecated/grey) | ![terra-application](https://badgen.net/badge/dependencies/n%2Fa/grey) |

<h2 id="supported-browsers">
  Supported Browsers
</h2>

| Browser                     | Version |
|-----------------------------|---------|
| Chrome & Chrome for Android | Current |
| Edge                        | Current |
| Firefox                     | Current |
| Internet Explorer           | 10 & 11 |
| Safari & Mobile Safari      | Current |

<h2 id="internationalization-i18n">
  Internationalization (I18n)
</h2>
Please review [Terra's Internationalization documentation](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization) for more information. Included are directions on consumption and how internationalization is setup.

<h3 id="packages-requiring-i18n">
  Packages Requiring I18n
</h3>

- [terra-action-header](https://github.com/cerner/terra-core/tree/master/packages/terra-action-header)
- [terra-alert](https://github.com/cerner/terra-core/tree/master/packages/terra-alert)
- [terra-demographics-banner](https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner)
- [terra-dialog](https://github.com/cerner/terra-core/tree/master/packages/terra-dialog)
- [terra-form-checkbox](https://github.com/cerner/terra-core/tree/master/packages/terra-form-checkbox)
- [terra-form-field](https://github.com/cerner/terra-core/tree/master/packages/terra-form-field)
- [terra-form-radio](https://github.com/cerner/terra-core/tree/master/packages/terra-form-radio)
- [terra-form-select](https://github.com/cerner/terra-core/tree/master/packages/terra-form-select)
- [terra-i18n](https://github.com/cerner/terra-core/tree/master/packages/terra-form-i18n)
- [terra-overlay](https://github.com/cerner/terra-core/tree/master/packages/terra-overlay)
- [terra-search-field](https://github.com/cerner/terra-core/tree/master/packages/terra-search-field)
- [terra-show-hide](https://github.com/cerner/terra-core/tree/master/packages/terra-show-hide)
- [terra-status-view](https://github.com/cerner/terra-core/tree/master/packages/terra-status-view)

<h2 id="contributing">
  Contributing
</h2>

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for issue reporting and pull requests.

<h2 id="local-development">
  Local Development
</h2>

1. Install [Node Version Manager (NVM) and Node](https://github.com/creationix/nvm#install-script). The root directory contains a [`.nvmrc`](https://github.com/cerner/terra-core/blob/master/.nvmrc) file that specifies terra-core's node version. Once NVM is installed and you are within the root directory, your version of node will change to this version.
2. Install docker https://www.docker.com/ to run browser tests.
3. Install dependencies and run tests.
```sh
npm install
npm run test
```

<h2 id="license">
  LICENSE
</h2>

Copyright 2017 - 2019 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
