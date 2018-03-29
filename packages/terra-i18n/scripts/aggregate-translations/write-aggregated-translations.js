const path = require('path');
const supportedLocales = require('../../src/i18nSupportedLocales');
const generateTranslationFile = require('./generate-translation-file');

const writeAggregatedTranslations = (aggregatedMessages, locales, fileSystem, outputDir) => {
  // Create a file of aggregated translation messages for each locale
  locales.forEach((locale) => {
    if (locale in aggregatedMessages) {
      if (!supportedLocales.includes(locale)) {
        // eslint-disable-next-line no-console
        console.warn(`WARNING: ${locale} is NOT a Terra supported locale. Creating an aggregate translation file for ${locale}, but be sure to include the appropriate translations messages for each terra component used in your application otherwise the translations will fail and the fallback will be displayed.`);
      }

      const translationFilePath = path.resolve(outputDir, `${locale}.js`);
      fileSystem.writeFileSync(translationFilePath, generateTranslationFile(locale, aggregatedMessages[locale]));
    } else {
      throw new Error(`Translations aggregated for ${locale} locale, but messages were not loaded correctly. Please check that your translated modules were installed correctly.`);
    }
  });
};

module.exports = writeAggregatedTranslations;
