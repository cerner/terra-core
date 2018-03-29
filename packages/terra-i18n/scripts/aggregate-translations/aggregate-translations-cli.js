const path = require('path');
const commander = require('commander');
const i18nPackageJson = require('../../package.json');
const supportedLocales = require('../../src/i18nSupportedLocales');

const aggregateTranslations = require('./aggregate-translations');

// Adds custom search directory paths
const customSearchDirectories = [];
const addCustomDirectory = (baseDirectory, searchPattern) => {
  const customDir = searchPattern.split('/').join(path.sep);
  customSearchDirectories.push(customDir);
};

// Parse locale list
const localeList = list => (
  // eslint-disable-next-line no-useless-escape
  list.replace(/[\[\]\s]/g, '').split(',').map(String)
);

// Parse process arguments
commander
  .version(i18nPackageJson.version)
  .option('-b, --baseDir [baseDir]', 'The directory to start searching from and to prepend to the output directory', process.cwd())
  .option('-d, --directories [directories]', 'Regex pattern to glob search for translations', addCustomDirectory)
  .option('-l, --locales <locales>', 'The list of locale codes aggregate on and combine into a single, respective translation file ', localeList, supportedLocales)
  .option('-o, --outputDir [outputDir]', 'The output location of the generated configuration file', './aggregated-translations')
  .parse(process.argv);

const aggregationOption = {
  baseDirectory: commander.baseDir,
  directories: customSearchDirectories,
  locales: commander.locales,
  outputDir: commander.outputDir,
};

aggregateTranslations(aggregationOption);
