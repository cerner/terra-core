# Terra Text


[![NPM version](https://badgen.net/npm/v/terra-text)](https://www.npmjs.org/package/terra-text)
[![Build Status](https://badgen.net/travis/cerner/terra-core)](https://travis-ci.org/cerner/terra-core)

The font size, font weight, font family, and font color in terra components are set to defaults in terra-base which is then inherited into all components. Components can override these base styles as needed in their specific component CSS. In some cases, you may need text that differs from the base font styles for text that doesn't go with a specific terra component.

In these cases, the text component may be helpful. Using terra-text, you can create text that differs from the base text styles by changing the font size, font weight, and color.

However, there are drawbacks to be aware of with this component. The styles set with this component are not themable and will be static. If this is a concern for your usage, we recommend building a custom component that handles your font styles that need to differ from the base font styles so you can control the themability of them.

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-core/tree/master/packages/terra-text/docs)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-text`

## LICENSE

Copyright 2017 - 2019 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
