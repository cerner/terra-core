# Terra Base

The base component receives customized translation messages from the application and passes translations into I18nProvider wrapper and sets minimal global styles for an application.
Global styles include CSS to help normalize box-sizing, reset margins/paddings, and define global font styles.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-base`
  - `yarn add terra-base`

## Usage

```jsx
import React from 'react';
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
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)

