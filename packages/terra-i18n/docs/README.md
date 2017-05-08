# Terra I18n

The terra-i18n component provides the internationalization to the React component. Terra supports the following locales: 'de' 'es' 'en' 'en-US' 'en-GB', 'fi-FI', 'fr', 'pt'. All locales related files are loading on demand.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-i18n`
  - `yarn add terra-i18n`

## Usage

```jsx
import { I18nProvider, i18nLoader } from 'terra-i18n';

i18nLoader('en', this.setState, this)

<I18nProvider locale={this.state.locale} messages={this.state.messages} />
```

Note that the state of the object needs to contain keys as follows for the i18nLoader callback to work properly:

```js
{
  areTranslationsLoaded: false,
  locale: props.locale,
  messages: {},
}
```
