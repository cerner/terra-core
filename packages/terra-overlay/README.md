# Terra Overlay


[![NPM version](https://badgen.net/npm/v/terra-overlay)](https://www.npmjs.org/package/terra-overlay)
[![Build Status](https://badgen.net/travis/cerner/terra-core)](https://travis-ci.com/cerner/terra-core)

## Deprecation Notice

The terra-overlay npm package is deprecated as of `3.62.0`. terra-overlay will be removed from the repo in a future version, but the package will remain on npm.

### What deprecation means
Any apps that currently use terra-overlay will continue to work as-is.
However, the terra-overlay package will no longer continue to be supported / developed.

## Why?
The reason behind Terra-Overlay deprecation is to integrate the presentation of overlays with the overall application framework to ensure better accessibility. 

## How to replace this package?
This package can be replaced with [terra-application-loading-overlay](https://engineering.cerner.com/terra-ui/application/terra-application/components/application-loading-overlay)

~~The Terra Overlay component is a component that displays an overlay relative to the container that triggered the overlay. This component blocks interactions and fades out all elements of the triggering container.

A Loading Overlay is a subcomponent that displays an overlay with a spinner icon and loading message.~~

- [Getting Started](#getting-started)
- [Documentation](https://engineering.cerner.com/terra-ui/components/terra-overlay/overlay/overlay)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-overlay`

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
