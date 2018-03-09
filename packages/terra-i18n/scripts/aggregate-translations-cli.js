const path = require('path');
const fs = require('fs');
const commander = require('commander');
const i18nPackageJson = require('../package.json');
const supportedLocales = require('../src/i18nSupportedLocales');

const aggregateTranslations = require('./aggregate-translations');

const processPath = process.cwd();
const rootPath = processPath.includes('packages') ? processPath.split('packages')[0] : processPath;

// Adds custom search directory paths
const customSearchDirectories = [];
const addCustomDirectory = (searchPattern) => {
  const customDir = searchPattern.split('/').join(path.sep);
  customSearchDirectories.push(path.resolve(rootPath, customDir));
};

// Parse locale list
const localeList = list => (
  // eslint-disable-next-line no-useless-escape
  list.replace(/[\[\]\s]/g, '').split(',').map(String)
);

// Parse process arguments
commander
  .version(i18nPackageJson.version)
  .option('-d, --directories [directories]', 'Regex pattern to glob search for translations', addCustomDirectory)
  .option('-f, --file-system [fileSystem]', 'The output location of the generated configuration file', fs)
  .option('-l, --locales <locales>', 'The list of locale codes aggregate on and combine into a single, respective translation file ', localeList, supportedLocales)
  .option('-o, --output [outputDir]', 'The output location of the generated configuration file', './aggregated-translations')
  .parse(process.argv);

const aggregationOption = {
  directories: customSearchDirectories,
  fileSystem: commander.fileSystem,
  locales: commander.locales,
  outputDir: commander.output,
};

aggregateTranslations(aggregationOption);
