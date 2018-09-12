/* eslint-disable import/no-extraneous-dependencies */
const aggregateTranslations = require('terra-toolkit/scripts/aggregate-translations/aggregate-translations');
const i18nSupportedLocales = require('terra-toolkit/scripts/aggregate-translations/i18nSupportedLocales');

const aggregateOptions = {
  baseDir: __dirname,
  directories: ['./src/**/translations', './translations'],
  locales: i18nSupportedLocales,
  outputDir: './aggregated-translations',
};

aggregateTranslations(aggregateOptions);
