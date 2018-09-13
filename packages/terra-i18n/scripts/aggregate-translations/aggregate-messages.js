const path = require('path');
const fs = require('fs');

const aggregateTranslationMessages = (translationDirectories, locales) => {
  const translations = {};
  locales.forEach((language) => {
    translations[language] = {};
  });

  translationDirectories.forEach(dir => locales.forEach((language) => {
    const translationFile = path.resolve(dir, `${language}.json`);
    try {
      Object.assign(translations[language], JSON.parse(fs.readFileSync(translationFile, 'utf8')));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(`Translation file ${language}.json not found for ${dir}`);
    }
  }));

  return translations;
};

module.exports = aggregateTranslationMessages;
