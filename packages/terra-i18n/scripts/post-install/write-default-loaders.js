const fs = require('fs');
const path = require('path');

if (!fs.existsSync('./node_modules')) {
  fs.mkdirSync('./node_modules');
}
// write default intl loader module
const intlLoaderPath = path.resolve('./node_modules', 'intlLoaders.js');
const intlLoaders = 'module.exports = require(\'../loaders/defaultIntlLoaders\');';
fs.writeFileSync(intlLoaderPath, intlLoaders);

// write default translations loader module
const translationsPath = path.resolve('./node_modules', 'translationsLoaders.js');
const translationLoaders = 'module.exports = require(\'../loaders/defaultTranslationsLoaders\');';
fs.writeFileSync(translationsPath, translationLoaders);
