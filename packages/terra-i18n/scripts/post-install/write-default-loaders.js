const fse = require('fs-extra');
const path = require('path');

/*
 The postinstall script is run to keep passivity for consumers.

 In the v2.3.0 release, the `terra-i18n` loaders were updated to pull in the dynamically
 generated intlLoader and translationLoader modules created by the aggregate-translations pre-build tool,
 instead of referencing the static intl and translation loaders. These dynamic loaders are configured to
 the specified locales and resolves this previously seen issue. See https://github.com/cerner/terra-core/issues/855.

 To keep passivity for consumers not utilizing the aggregate-translations pre-build tool, i.e. using the deprecated
 `terra-i18n-plugin`, this script adds the previously removed static intl and translation loaders to terra-i18n's
 `node_modules` directory. This allows the terra-i18n loaders to still reference the intlLoader and translationLoader
 modules.

 TO DO: Remove this script and the loaders directory at the next major version bump. See https://github.com/cerner/terra-core/issues/1377.
*/

fse.mkdirpSync('./node_modules');

// write default intl loader module
const intlLoaderPath = path.resolve('./node_modules', 'intlLoaders.js');
const intlLoaders = 'module.exports = require(\'../lib/defaultIntlLoaders\');';
fse.writeFileSync(intlLoaderPath, intlLoaders);

// write default translations loader module
const translationsPath = path.resolve('./node_modules', 'translationsLoaders.js');
const translationLoaders = 'module.exports = require(\'../lib/defaultTranslationsLoaders\');';
fse.writeFileSync(translationsPath, translationLoaders);
