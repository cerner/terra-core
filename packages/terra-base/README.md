# Terra Base


[![NPM version](http://img.shields.io/npm/v/terra-base.svg)](https://www.npmjs.org/package/terra-base)
[![Build Status](https://travis-ci.org/cerner/terra-core.svg?branch=master)](https://travis-ci.org/cerner/terra-core)

The base component sets minimal global styles for an application.
This includes CSS to help normalize box-sizing, reset margins/paddings, and define global font styles.

**Note: This component should be imported before the other terra components in your app.** This is to help ensure that these styles are defined at the beginning of the [extracted stylesheet](https://github.com/webpack-contrib/extract-text-webpack-plugin) and are inherited down to the other terra components.

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-base`
- Consume `Base` with translations:
```
import Base from 'terra-base';
<Base locale={localeByBackend} customMessages={translationsByBackend}>
  ...
</Base>
```

- Consume `Base` without translations:
```
import Base from 'terra-base';
<Base>
  ...
</Base>
```

## LICENSE

Copyright 2017 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
