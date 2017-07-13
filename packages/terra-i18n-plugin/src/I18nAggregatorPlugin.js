import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

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

function aggregateTranslations(options) {
  const supportedLocales = options.supportedLocales;
  supportedLocales.forEach((language) => {
    const currentLanguageMessages = {};

    // Check base directory for translation file
    const baseTranslationFile = path.resolve(options.baseDirectory, 'translations', `${language}.json`);
    if (fs.existsSync(baseTranslationFile)) {
      Object.assign(currentLanguageMessages, JSON.parse(fs.readFileSync(baseTranslationFile, 'utf8')));
    }

    // Check module directory for translation file
    getDirectories(path.resolve(options.baseDirectory, 'node_modules')).forEach((module) => {
      const translationFile = path.resolve(options.baseDirectory, 'node_modules', module, 'translations', `${language}.json`);
      if (fs.existsSync(translationFile)) {
        Object.assign(currentLanguageMessages, JSON.parse(fs.readFileSync(translationFile, 'utf8')));
      }
    });

    // Aggregate messages for language in one file
    if (currentLanguageMessages !== {}) {
      mkdirp.sync(path.resolve(options.baseDirectory, 'aggregated-translations'));
      fs.writeFileSync(path.resolve(options.baseDirectory, 'aggregated-translations', `${language}.js`),
        generateTranslationFile(language, currentLanguageMessages));
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
