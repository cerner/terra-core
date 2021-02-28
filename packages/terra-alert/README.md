# Terra Alert


[![NPM version](https://badgen.net/npm/v/terra-alert)](https://www.npmjs.org/package/terra-alert)
[![Build Status](https://badgen.net/travis/cerner/terra-core)](https://travis-ci.com/cerner/terra-core)

## Deprecation Notice
The terra-alert npm package is deprecated as of `4.49.0`. terra-alert will be removed from the repo in a future version, but the package will remain on npm.

### What deprecation means
Any apps that currently use terra-alert will continue to work as-is.
However, the terra-alert package will no longer continue to be supported / developed.

## Why?
The reason behind terra-alert deprecation is to promote the usage of notification-banner provided by terra-application. As notification-banner integrates itself in the framework of application and prioritizes the notification based on it's variant.

## How to replace this package?
This package can be replaced with [notification-banner](https://engineering.cerner.com/terra-ui/application/terra-application/components/notification-banner)

~~The Terra Alert component is a notification banner that can be rendered in your application when there is information that you want to bring to the user's attention. The Alert component supports a number of built-in notification types that render with pre-defined colors and icons that help the user understand the severity and meaning of the notification. A custom notification type is also supported that allows your application to customize an alert that may not fit into the pre-defined types.~~

- [Getting Started](#getting-started)
- [Documentation](https://engineering.cerner.com/terra-ui/components/terra-alert/alert/alert)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-alert`

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
