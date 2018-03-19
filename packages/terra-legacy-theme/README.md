# Terra Legacy Theme

[![NPM version](http://img.shields.io/npm/v/terra-legacy-theme.svg)](https://www.npmjs.org/package/terra-legacy-theme)
[![Build Status](https://travis-ci.org/cerner/terra-core.svg?branch=master)](https://travis-ci.org/cerner/terra-core)

## Deprecation Notice

The terra-legacy-theme npm package is deprecated as of 1.6.0. terra-legacy-theme will be removed from the repo in a future version, but the package will remain on npm.

### What deprecation means
Any apps that currently use terra-legacy-theme will continue to work as-is.
However, the terra-legacy-theme package will no longer continue to be supported / developed.

## Why?
When we started development, we had planned to use scss variables for colors, fonts, etc. Early in development, we switched to using CSS custom properties, though we left this package untouched. This package is not used in any terra-ui components, but we have yet to remove it from the repo. The variables provided in this package are not in sync with what is actually used in terra. The default theme provided by terra components is meant to be the legacy looking theme. We do not recommend using package.

## How to replace this package?
Instead of using this file, we've opted to hard-code these values as fallback values directly into the source code of our components using the CSS custom property syntax. This has eliminated the need for using this package in the terra-ui components. This approach may be applicable for teams as they move away from using this package as-well.

~~The legacy-theme component sets global variables for the entire application. Global variables are included for responsive breakpoints, colors, and typography.~~

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-core/tree/master/packages/terra-legacy-theme/docs)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-legacy-theme`

## LICENSE

Copyright 2017 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
