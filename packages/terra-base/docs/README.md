# Terra Base

The `terra-base` component will handle locale changes, manage the locale loading state, and receive customized translation messages from an application and pass them into the `terra-i18n` I18nProvider. It also sets minimal global styles for an application; styles include CSS to help normalize box-sizing, reset margins and paddings, and define global font styles.

**Note: This component must be imported before the other terra components in your app.** This is to help ensure that these styles are defined at the beginning of the [extracted stylesheet](https://github.com/webpack-contrib/extract-text-webpack-plugin) and are inherited by the other terra components. Additionally, when used to internationalize an application, it will wrap the application’s root component such that the entire application is within the same configured i18n context.

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs)
- [LICENSE](#license)

<h2 id="getting-started">
  Getting Started
</h2>

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

## I18n

The `locale` prop provided to `Base` will be used to load the appropriate translation messages. `Base` additionally wraps its children with an `I18nProvider` component (as provided by `terra-i18n`) that exposes the loaded messages to its children through its context.

Children of `Base` should use the provided `injectIntl` higher-order component generator to interface with the `I18nProvider` context. The `intlShape` prop type is also available for use in those components' prop type specifications.

```jsx
// ChildComponent.jsx

import React from 'react';
import { injectIntl, intlShape } from 'terra-base';

const ChildComponent = ({ intl }) => (
  <p>{intl.formatMessage({ id: 'my.string.id' })}</p>
);

ChildComponent.propTypes = {
  intl: intlShape,
};

export default injectIntl(ChildComponent);

// App.jsx

import React from 'react';
import Base from 'terra-base';
import ChildComponent from './ChildComponent';

const App = () => (
  <Base locale="en">
    <ChildComponent />
  </Base>
);
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [react_on_rails Compatible](https://github.com/shakacode/react_on_rails/blob/8cb06ed35cb5c2c453bcc193282b4c091574c1b7/docs/basics/i18n.md#how-to-add-i18n)
* [CND Compatible](https://github.com/webpack/docs/wiki/configuration#outputpublicpath)
