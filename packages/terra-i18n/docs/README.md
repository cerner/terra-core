# Terra I18n

The terra-i18n component provides the internationalization to the React component. Terra supports the following locales: 'de' 'es' 'en' 'en-US' 'en-GB', 'fi-FI', 'fr', 'pt'. All locales related files are loading on demand.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-i18n`
  - `yarn add terra-i18n`

## Usage

```jsx
import React from 'react';
import { I18nProvider, i18nLoader } from 'terra-i18n';

export default class ExampleLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      areTranslationsLoaded: false,
      locale: props.locale,
      messages: {},
    };
  }

  componentDidMount() {
    i18nLoader(this.state.locale, this.setState, this);
  }

  render() {
    // Do not render components or the provider until translations and other
    // dependencies are loaded.
    if (!this.state.areTranslationsLoaded) {
      return null;
    }

    return (
      <I18nProvider locale={this.state.locale} messages={this.state.messages}>
        {this.props.children}
      </I18nProvider>
    );
  }
}
```

Note that the state of the object needs to contain keys as follows for the i18nLoader callback to work properly:

```js
{
  areTranslationsLoaded: false,
  locale: props.locale,
  messages: {},
}
```

Children of the `I18nProvider` can use the provided `injectIntl` higher-order component generator to interface with the `I18nProvider` context. The `intlShape` prop type is also available for use in the components' prop type specifications.

```jsx
import React from 'react';
import { injectIntl, intlShape } from 'terra-i18n';

const ChildComponent = ({ intl }) => (
  <p>{intl.formatMessage({ id: 'my.string.id' })}</p>
);

ChildComponent.propTypes = {
  intl: intlShape,
};

export default injectIntl(ChildComponent);
```


## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
