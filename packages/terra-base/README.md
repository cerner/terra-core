# Terra Base

[![NPM version](https://badgen.net/npm/v/terra-base)](https://www.npmjs.org/package/terra-base)
[![Build Status](https://badgen.net/travis/cerner/terra-core)](https://travis-ci.org/cerner/terra-core)

The `terra-base` is a core component to any app built with Terra UI components. The base component handles two concerns, global internationalization concerns and global application styles.

Terra UI provides builtin translations and LTR / RTL support which makes Terra UI powered apps ready to use in several countries with ease. All apps built with Terra UI are required to set up translations, even if they only intend to support English. As we support apps built for use around the world, we want apps to be prepared for internationalization from the beginning of development. It is easier to add additional locales and translations to an app built with internationalization and translations from the beginning compared to retrofitting internalization and translations into an app as it evolves into new markets.

To help with this, the `terra-base` component is used to handle locale changes, manage the locale loading state, and receive customized translation messages from an application and pass them into the `terra-i18n` I18nProvider.

We recommend that this component should wrap the application’s root component such that the entire application is within the same configured i18n context.

The component should also be used with our [aggregate-translations pre-build tool](https://github.com/cerner/terra-toolkit/blob/master/docs/AggregateTranslations.md).

You can read more about [setting up Internationalization in your Terra UI app here](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization).

The terra-base component also sets minimal global styles for an application; styles include CSS to help normalize box-sizing, reset margins and paddings, and define global font styles.

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-base`

## Usage

Without custom app translations.

```jsx
import Base from 'terra-base';
import App from './App'; // Your custom app component

// This value could be sent from the server as well
const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

<Base locale={locale}>
  <App />
</Base>
```

With custom app translations.

```jsx
import Base from 'terra-base';
import App from './App'; // Your custom app component
import appTranslations from './aggregated-translations/en.js'; // Your aggregated app translations

// This value could be sent from the server as well
const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

<Base locale={locale} customMessages={appTranslations}>
  <App />
</Base>
```

## LICENSE

Copyright 2017 - 2019 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
