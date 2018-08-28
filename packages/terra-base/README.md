# Terra Base


[![NPM version](https://badgen.net/npm/v/terra-base)](https://www.npmjs.org/package/terra-base)
[![Build Status](https://badgen.net/travis/cerner/terra-core)](https://travis-ci.org/cerner/terra-core)

The `terra-base` component will handle locale changes, manage the locale loading state, and receive customized translation messages from an application and pass them into the `terra-i18n` I18nProvider. It also sets minimal global styles for an application; styles include CSS to help normalize box-sizing, reset margins and paddings, and define global font styles.

**Note: This component should be imported before the other terra components in your app.** This is to help ensure that these styles are defined at the beginning of the [extracted stylesheet](https://github.com/webpack-contrib/extract-text-webpack-plugin) and are inherited down to the other terra components. Additionally, when used to internationalize an application, it will wrap the application’s root component such that the entire application is within the same configured i18n context.

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-base`

## Usage

- **Recommended:** Consume `Base` with translations:
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
