const path = require('path');
const fs = require('fs');
const glob = require('glob');
const supportedLocales = require('../../src/i18nSupportedLocales');

const aggregateMessages = require('./aggregate-messages');
const writeAggregatedTranslations = require('./write-aggregated-translations');
const writeI18nLoaders = require('./write-i18n-loaders');

const processPath = process.cwd();
const rootPath = processPath.includes('packages') ? processPath.split('packages')[0] : processPath;

const defaultSearchPatterns = [
  path.resolve(rootPath, 'translations'), // root level translations
  path.resolve(rootPath, 'node_modules', 'terra-*', 'translations'), // root level dependency translations
  path.resolve(rootPath, 'packages', 'terra-*', 'translations'), // package level translations
  path.resolve(rootPath, 'packages', 'terra-*', 'node_modules', 'terra-*', 'translations'), // package level dependency translations
];

const aggregatedTranslations = (options) => {
  const directories = (options || {}).directories || [];
  const fileSystem = (options || {}).fileSystem || fs;
  const locales = (options || {}).locales || supportedLocales;
  if (!locales.includes('en')) {
    locales.push('en');
  }
  const outputDirectory = (options || {}).outputDir || './aggregated-translations';

  const searchPaths = defaultSearchPatterns.concat(directories);

  let translationDirectories = [];
  searchPaths.forEach((searchPath) => {
    translationDirectories = translationDirectories.concat(glob.sync(searchPath));
  });

  // Aggregate translation messages for each of the translations directories
  const aggregatedMessages = aggregateMessages(translationDirectories, locales);

  const outputDir = path.resolve(rootPath, outputDirectory);

  // Write aggregated translation messages to a file for each locale
  writeAggregatedTranslations(aggregatedMessages, locales, fileSystem, outputDir);

  // Write intl and tranlsations loaders for the specified locales
  writeI18nLoaders(locales, fileSystem, outputDir);
};

module.exports = aggregatedTranslations;
