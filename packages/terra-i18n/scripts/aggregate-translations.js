const path = require('path');
const fs = require('fs');
const commander = require('commander');
const glob = require('glob');
const i18nPackageJson = require('../package.json');
const supportedLocales = require('../src/i18nSupportedLocales');

const aggregateMessages = require('./aggregate-messages');
const writeAggregatedTranslations = require('./write-aggregated-translations');
const writeI18nLoaders = require('./write-i18n-loaders');

// Adds custom search paths
const customSearchPatterns = [];
const addCustomPattern = (searchPattern) => {
  const customPattern = searchPattern.split('/').join(path.sep);
  customSearchPatterns.push(path.resolve(process.cwd(), customPattern));
};

const localeList = list => (
  // eslint-disable-next-line no-useless-escape
  list.replace(/[\[\]\s]/g, '').split(',').map(String)
);

// Parse process arguments
commander
  .version(i18nPackageJson.version)
  .option('-s, --search [searchPattern]', 'Regex pattern to glob search for translations', addCustomPattern)
  .option('-l, --locales <locales>', 'The list of locale codes aggregate on and combine into a single, respective translation file ', localeList, supportedLocales)
  .option('-f, --file-system [fileSystem]', 'The output location of the generated configuration file', fs)
  .option('-o, --output [outputPath]', 'The output location of the generated configuration file', './aggregated-translations')
  .parse(process.argv);

const processPath = process.cwd();
const rootPath = processPath.includes('packages') ? processPath.split('packages')[0] : processPath;

const defaultSearchPatterns = [
  path.resolve(rootPath, 'translations'), // root level tranlsations
  path.resolve(rootPath, 'node_modules', 'terra-*', 'translations'), // root level dependency tranlsations
  path.resolve(rootPath, 'packages', 'terra-*', 'translations'), // package level tranlsations
  path.resolve(rootPath, 'packages', 'terra-*', 'node_modules', 'terra-*', 'translations'), // package level dependency tranlsations
];

const searchPaths = defaultSearchPatterns.concat(customSearchPatterns);

let translationsDirectories = [];
searchPaths.forEach((searchPath) => {
  translationsDirectories = translationsDirectories.concat(glob.sync(searchPath));
});

// Aggregate translation messages for each of the translations directories
const aggregatedMessages = aggregateMessages(translationsDirectories, commander.locales, commander.fileSystem);

// Write aggregated translation messages to a file for each locale
writeAggregatedTranslations(aggregatedMessages, commander.locales, commander.fileSystem, commander.output);
writeI18nLoaders(commander.locales, commander.fileSystem, commander.output);
