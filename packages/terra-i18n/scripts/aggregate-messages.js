const path = require('path');

const aggregateTranslationMessages = (translationsDirectories, locales, fileSystem) => {
  const translations = {};
  locales.forEach((language) => {
    translations[language] = {};
  });

  translationsDirectories.forEach(dir =>
    // Check the directory for a translation file for each locale
    locales.forEach((language) => {
      const translationFile = path.resolve(dir, `${language}.json`);
      try {
        Object.assign(translations[language], JSON.parse(fileSystem.readFileSync(translationFile, 'utf8')));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(`Translation file ${language}.json not found for ${dir}`);
      }
    }),
  );

  return translations;
};

module.exports = aggregateTranslationMessages;
