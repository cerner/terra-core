# Terra i18n Upgrade Guide

## Changes from 3.0 to 4.0

The terra-i18n `aggregate-translations` pre-build tool has been removed from this package.

Along with this, the post-install script which wrote default intl and translation loaders has been removed.

Use the [`aggregate-translations` pre-build tool from terra-toolkit instead.](https://github.com/cerner/terra-toolkit/blob/master/docs/AggregateTranslations.md)

If you require translations in your Jest tests, create a `jestglobalsetup.js` file in your app.

Add the following code to `jestglobalsetup.js`:

```js
const aggregateTranslations = require('terra-toolkit/scripts/aggregate-translations/aggregate-translations');

module.exports = () => {
  aggregateTranslations();
};
```

In your app's jest config file, add the following:

```js
globalSetup: './jestglobalsetup.js',
// This allows jest to resolve files from the generated aggregated-translations in addition to node_modules
moduleDirectories: [
  'aggregated-translations',
  'node_modules',
],
```

## Changes from 2.0 to 3.0

### Changes to CSS Custom Properties

The following transitive dependency had breaking changes. See its upgrade guide for more information.
* terra-doc-template
