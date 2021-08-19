# Terra Status View

[![NPM version](https://badgen.net/npm/v/terra-status-view)](https://www.npmjs.org/package/terra-status-view)
[![Build Status](https://badgen.net/travis/cerner/terra-core)](https://travis-ci.com/cerner/terra-core)

## Deprecation Notice
The terra-status-view npm package is deprecated as of `4.45.0`. terra-status-view will be removed from the repo in a future version, but the package will remain on npm.

### What deprecation means
Any apps that currently use terra-status-view will continue to work as-is.
However, the terra-status-view package will no longer continue to be supported / developed.

## Why?
The reason behind terra-status-view deprecation is to integrate the presentation of overlays with the overall application framework to ensure better accessibility.

## How to replace this package?
This package can be replaced with [terra-application-status-overlay](https://engineering.cerner.com/terra-ui/application/terra-application/components/application-status-overlay).
The `terra-application-status-overlay` is constrained to predefined variants to promote unified framework pattern. Hence, it will not support custom variants.


~~The status view component provides a customizable icon, message, and buttons in a view.~~

- [Getting Started](#getting-started)
- [Documentation](https://engineering.cerner.com/terra-ui/components/terra-status-view/status-view/status-view)
- [LICENSE](#license)

## Getting Started

- Install with [npm](https://www.npmjs.com): `npm install terra-status-view`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |
| react-intl | ^2.8.0 |

<!-- AUTO-GENERATED-CONTENT:END -->

## LICENSE

Copyright 2017 - 2019 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
