# Aggregating Translations
The terra-i18n package provides internationalization for React components to load translations and locale data on demand. To successfully render an internationalized component, all translation information must be provided as a single file for each locale.

The terra-i18n package provides the `aggregate-translations` pre-build tool to assist with creating the translation, intl loader and translation loader files that are configured for the specified locales. This tool is offered as a CLI script and as a setup function.

## How It Works
This script globs the specified translation directory regex pattern(s) to locate the translation directories. Then,
for each specified locale, the message-translation pairs from each translation json is extracted and added to the locale's message hash. When all messages have been extracted, the `aggregate-translations` script will create a single translation javascript file for each locale that exports the `messages` object, `areTranslationsLoaded` boolean and `locale` string. When a translation file is requested by terra-i18n's `I18nProvider`, this information is returned and used to provide the locale information.

Once all of the translation files are created for the specified locales, the script will create an intl loader and translation loader that is specific to the specified locales. This is utilized by the by terra-i18n's `I18nLoader` to load on-demand locale information.

### `aggregate-translations` Options
| Option | CLI Option | Type | Description | Default |
|-|-|-|-|-|
| baseDir | -b, --baseDir | Path | Directory to search from and to prepend to the output directory. | current working directory |
| directories | -d, --directories | Array of Strings | Translation directory regex pattern(s) to glob, in addition to the default search patterns. | [ ] |
| outputFileSystem | N/A | File System Module | The filesystem to use to write the translation and loader files. Note: The file system provide must support `mkdirp`. | [fs-extra](https://www.npmjs.com/package/fs-extra) |
| locales  | -l, --locales | Array of Strings | The list of locale codes to aggregate. Note: 'en' is always added if not specified. | [terra-supported locales](https://github.com/cerner/terra-core/blob/master/packages/terra-i18n/src/i18nSupportedLocales.js) |
| outputDir | -o, --ouputDir | String | Output directory for the translation and loader files | ./aggregated-translations |

#### Setup Example
The `aggregate-translations` setup function can be used as follows:
```js
// webpack config file
const aggregateTranslations = require('terra-i18n/scripts/aggregate-translations/aggregate-translations');

const aggregateOptions = {
    baseDir: __dirname,
    directories: ['./src/**/translations', './translations'],
    locales: ['en', 'en-US'],
    outputDir: './aggregated-translations',
};

aggregateTranslations(aggregateOptions);

module.exports = // ...webpack config;
```

#### CLI Example
The `aggregate-translations` CLI is supplied as a bin script, called `aggregate-translations`, and can be used as follows:
```js
scripts: {
    // ...other scripts
    "aggregate-translations": "aggregate-translations -b ./ -d ./src/**/translations -d ./translations -l ['en', 'es'] -o ./aggregated-translations",
    "start:build": "npm run aggregate-translations && npm run start"
}
```


## Resolving Translations and Loaders
To provide the aggregated-translations files and loaders as modules to terra-i18n, the translated output directory must be supplied the webpack `resolve.modules` key before 'node_modules' resolution:
```js
 resolve: {
    modules: [path.resolve(__dirname, 'aggregated-translations'), 'node_modules'],
 },
```
This `resolve.modules` configuration indicates module resolving occurs in this order:
1. `./aggregated_translations` (or indicated output directory)
2. `./node_modules`
