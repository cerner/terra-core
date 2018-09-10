const aggregateTranslations = require('../../scripts/aggregate-translations/aggregate-translations');
const i18nSupportedLocales = require('../../src/i18nSupportedLocales');

const aggregateOptions = {
  baseDir: __dirname,
  directories: ['./src/**/translations', './translations'],
  locales: i18nSupportedLocales,
  outputDir: './aggregated-translations',
};

aggregateTranslations(aggregateOptions);
