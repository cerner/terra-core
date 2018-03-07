const path = require('path');
const rimraf = require('rimraf');
const supportedLocales = require('../src/i18nSupportedLocales');
const generateTranslationFile = require('./generate-translation-file');

const writeAggregatedTranslations = (aggregatedMessages, locales, fileSystem, outputPath) => {
  // Clean the output directory if it exists
  if (fileSystem.existsSync(outputPath)) {
    rimraf.sync(outputPath);
  }

  const outputDirs = outputPath.split(path.sep);

  // Make the output directory
  let makeDir = outputDirs.shift();
  outputDirs.forEach((dir) => {
    makeDir = makeDir + path.sep + dir;
    if (!fileSystem.existsSync(makeDir)) {
      fileSystem.mkdirSync(makeDir);
    }
  });

  // Create an file of aggregated translaiton messages for each locale
  locales.forEach((locale) => {
    if (locale in aggregatedMessages) {
      if (!supportedLocales.includes(locale)) {
        // eslint-disable-next-line no-console
        console.warn(`WARNING: ${locale} is NOT a Terra supported locale. Creating an aggregate translation file for ${locale}, but be sure to include the appropriate translations messages for each terra component used in your application otherwise the translations will fail and the fallback will be displayed.`);
      }

      const translationFilePath = path.resolve(outputPath, `${locale}.js`);
      fileSystem.writeFileSync(translationFilePath, generateTranslationFile(locale, aggregatedMessages[locale]));
    } else {
      throw new Error(`Translations aggregated for ${locale} locale, but messages were not loaded correctly. Please check that your translated modules were installed correctly.`);
    }
  });
};

module.exports = writeAggregatedTranslations;
