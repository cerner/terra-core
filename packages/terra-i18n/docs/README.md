# Terra I18n

The terra-i18n component provides the internationalization to the React component. Terra supports the following locales: 'de' 'es' 'en' 'en-US' 'en-GB', 'fi-FI', 'fr', 'pt'. All locales related files are loading on demand.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-i18n`
  - `yarn add terra-i18n`

## Usage

### I18nProvider and i18nLoader

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

### I18nAggregatorPlugin

This plugin needs to be added to the list of plugins available in your webpack config with a required option of baseDirectory:

```js
new I18nAggregatorPlugin({
  baseDirectory: __dirname,
}
```

By including this plugin, all dependencies will be examined for translation files in a translation folder at the root of the directory for supported locales (e.g. de.js or en.js) formatted as follows:

```js
const messages = {
  'Terra.ajax.error': 'Inhalt konnte nicht geladen werden.',
};

module.exports = {
  messages,
};
```

Then all of the messages for a given language across all dependencies will be aggregated into an overall translation file for that language and placed into an aggregated-translations directory.  In order for these resulting files to be able to be loaded by terra-i18n, that directory then needs to be added to the list of directories that the webpack resolver looks into.
