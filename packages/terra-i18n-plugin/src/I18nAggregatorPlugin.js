import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

let supportedLocales;

function generateTranslationFile(language, messages) {
  return `import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/${language.split('-')[0]}';

addLocaleData(localeData);

const messages = ${JSON.stringify(messages, null, 2)};

module.exports = {
  areTranslationsLoaded: true,
  locale: '${language}',
  messages,
};`;
}

function getDirectories(srcPath) {
  return fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
}

function aggregateDirectory(languageMessages, currentDirectory) {
  // Check the directory for translations
  const translationsDirectory = path.resolve(currentDirectory, 'translations');
  if (fs.existsSync(translationsDirectory)) {
    // Check the directory for each translation file
    supportedLocales.forEach((language) => {
      const translationFile = path.resolve(translationsDirectory, `${language}.json`);
      if (fs.existsSync(translationFile)) {
        Object.assign(languageMessages[language], JSON.parse(fs.readFileSync(translationFile, 'utf8')));
      } else {
        // eslint-disable-next-line no-console
        console.warn(`Translation file ${language}.json not found for ${translationsDirectory}`);
      }
    });
  }

  // Check the directory's node_modules for translation files
  const nodeMoudlesPath = path.resolve(currentDirectory, 'node_modules');
  if (fs.existsSync(nodeMoudlesPath)) {
    getDirectories(nodeMoudlesPath).forEach((module) => {
      aggregateDirectory(languageMessages, path.resolve(nodeMoudlesPath, module));
    });
  }

  return languageMessages;
}

function aggregateTranslations(options) {
  if (!options.baseDirectory) {
    throw new Error('Please included the base directory path in the plugin options.');
  }

  if (!options.supportedLocales) {
    throw new Error('Please included the supported locales in the plugin options.');
  }

  supportedLocales = options.supportedLocales;

  let languageMessages = {};
  supportedLocales.forEach((language) => { languageMessages[language] = {}; });

  // Aggregate translation messages for the directory
  languageMessages = aggregateDirectory(languageMessages, options.baseDirectory);

  // Create the aggregated-translations directory
  mkdirp.sync(path.resolve(options.baseDirectory, 'aggregated-translations'));

  // Create a file for each language for the aggregated messages
  supportedLocales.forEach((language) => {
    if (language in languageMessages) {
      fs.writeFileSync(path.resolve(options.baseDirectory, 'aggregated-translations', `${language}.js`),
        generateTranslationFile(language, languageMessages[language]));
    } else {
      throw new Error(`Translation file found for ${language}.json, but translations were not loaded correctly. Please check that your translated modules were installed correctly.`);
    }
  });
}

module.exports = (options) => {
  let updatedOptions = options;
  if (updatedOptions instanceof Array) {
    updatedOptions = {
      include: updatedOptions,
    };
  }

  if (!Array.isArray(updatedOptions.include)) {
    updatedOptions.include = [updatedOptions.include];
  }

  return {
    apply: aggregateTranslations.bind(this, updatedOptions),
  };
};
