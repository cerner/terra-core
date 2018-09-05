const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');
const supportedLocales = require('../../src/i18nSupportedLocales');

const aggregateMessages = require('./aggregate-messages');
const writeAggregatedTranslations = require('./write-aggregated-translations');
const writeI18nLoaders = require('./write-i18n-loaders');

const defaultSearchPatterns = baseDirectory => ([
  path.resolve(baseDirectory, 'translations'), // root level translations
  path.resolve(baseDirectory, 'node_modules', 'terra-*', 'translations'), // root level dependency translations
  path.resolve(baseDirectory, 'packages', 'terra-*', 'translations'), // package level translations
  path.resolve(baseDirectory, 'packages', 'terra-*', 'node_modules', 'terra-*', 'translations'), // package level dependency translations
]);

const customDirectories = (baseDirectory, directories) => (directories.map(dir => path.resolve(baseDirectory, dir)));

const aggregatedTranslations = (options) => {
  // eslint-disable-next-line no-console
  console.warn('WARNING: The terra-i18n aggregate-translations command has moved to terra terra-toolkit. Please use the "tt:aggregate-translations" command instead or include it from there. e.x. "require(\'terra-toolkit/scripts/aggregate-translations/aggregate-translations\')"');


  const baseDir = (options || {}).baseDir || process.cwd();
  const directories = (options || {}).directories || [];
  const fileSystem = (options || {}).outputFileSystem || fse;
  const locales = (options || {}).locales || supportedLocales;
  if (!locales.includes('en')) {
    locales.push('en');
  }
  const outputDirectory = (options || {}).outputDir || './aggregated-translations';

  const searchPaths = defaultSearchPatterns(baseDir).concat(customDirectories(baseDir, directories));

  let translationDirectories = [];
  searchPaths.forEach((searchPath) => {
    translationDirectories = translationDirectories.concat(glob.sync(searchPath));
  });

  // Aggregate translation messages for each of the translations directories
  const aggregatedMessages = aggregateMessages(translationDirectories, locales);

  const outputDir = path.resolve(baseDir, outputDirectory);
  fileSystem.mkdirpSync(outputDir);

  // Write aggregated translation messages to a file for each locale
  writeAggregatedTranslations(aggregatedMessages, locales, fileSystem, outputDir);

  // Write intl and translations loaders for the specified locales
  writeI18nLoaders(locales, fileSystem, outputDir);
};

module.exports = aggregatedTranslations;
