# Terra Abstract Modal


[![NPM version](https://badgen.net/npm/v/terra-abstract-modal)](https://www.npmjs.org/package/terra-abstract-modal)
[![Build Status](https://badgen.net/travis/cerner/terra-core)](https://travis-ci.org/cerner/terra-core)

The abstract modal is a structural component that provides the ability to display portal'd content in a layer above the app. It consists of an overlay and an unstyled fixed position div in which content can be placed. The abstract modal is not intended to be consumed directly, but rather wrapped in a higher order component. Higher order components can provide the abstract modal with sizing, visual styles, and content (e.g; header, body, and actionable buttons). The abstract modals maximum size is constrained by the viewport size, so the content placed inside the modal needs to be responsive.

- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-abstract-modal`

## Documentation

Documentation for this component is spilt into individual files.
One file for the main component and one file for each component modifier.

See the [documentation](docs/).

## LICENSE

Copyright 2017 - 2019 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
