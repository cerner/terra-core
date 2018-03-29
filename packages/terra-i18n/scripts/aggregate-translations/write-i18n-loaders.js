const path = require('path');
const startCase = require('lodash.startcase');
const supportedLocales = require('../../src/i18nSupportedLocales');

const createIntlLoader = (loaderName, locale) => (
  `const ${loaderName} = () =>
require.ensure([],
  require => require('intl/locale-data/jsonp/${locale}.js'),
  '${locale}-intl-local');\n
`);

const createTranslationLoader = (loaderName, locale) => (
  `const ${loaderName} = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('${locale}.js');
    callback.call(scope, i18n);
  }, '${locale}-translations');
};\n
`);

const writeLoaders = (type, locales, fileSystem, outputDir) => {
  const loaders = {};
  let loaderFile = '';

  // Create the intl and translations loaders for each locale
  locales.forEach((locale) => {
    if (type === 'intl' && !supportedLocales.includes(locale)) {
      // eslint-disable-next-line no-console
      console.warn(`WARNING: ${locale} is NOT a Terra supported locale. Creating a translation and intl loader for ${locale}, but be sure the lanaguage specified is supported by intl, otherwise no locale-date will exist and the import will result in an error.`);
    }

    const localeLoaderName = startCase(locale).replace(' ', '');
    const loaderName = `load${localeLoaderName}${startCase(type)}`;
    loaders[`'${locale}'`] = loaderName;

    if (type === 'intl') {
      loaderFile += createIntlLoader(loaderName, locale);
    } else {
      loaderFile += createTranslationLoader(loaderName, locale);
    }
  });

  // Create the loader exports
  const loaderString = JSON.stringify(loaders, null, 2).replace(/"/g, '');
  loaderFile += `const ${type}Loaders = ${loaderString};\n\nmodule.exports = ${type}Loaders;`;

  // Write the loaders file
  const loaderPath = path.resolve(outputDir, `${type}Loaders.js`);
  fileSystem.writeFileSync(loaderPath, loaderFile);
};

const writeI18nLoaders = (locales, fileSystem, outputDir) => {
  writeLoaders('intl', locales, fileSystem, outputDir);
  writeLoaders('translations', locales, fileSystem, outputDir);
};

module.exports = writeI18nLoaders;
