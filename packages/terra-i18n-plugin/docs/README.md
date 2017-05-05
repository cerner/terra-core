# Terra I18n-Plugin

The terra-i18n-plugin component is a webpack config plugin that examines all dependencies for translation files and then aggregates all translations for a single language into one file. Each language file is placed into an aggregated-translations directory that is then loaded by terra-i18n.


## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-i18n-plugin`
  - `yarn add terra-i18n-plugin`

## Usage

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
