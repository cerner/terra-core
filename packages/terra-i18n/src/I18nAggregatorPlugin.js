import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

import supportedLocales from './i18nSupportedLocales';

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

function apply(options) {
  supportedLocales.forEach((language) => {
    const currentLanguageMessages = {};
    getDirectories(path.resolve(options.baseDirectory, 'node_modules')).forEach((module) => {
      const translationFile = path.resolve(options.baseDirectory, 'node_modules', module, 'translations', `${language}.json`);
      if (fs.existsSync(translationFile)) {
        Object.assign(currentLanguageMessages, JSON.parse(fs.readFileSync(translationFile, 'utf8')));
      }
    });

    if (currentLanguageMessages !== {}) {
      mkdirp(path.resolve(options.baseDirectory, 'aggregated-translations'));
      fs.writeFileSync(path.resolve(options.baseDirectory, 'aggregated-translations', `${language}.js`),
        generateTranslationFile(language, currentLanguageMessages));
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
    apply: apply.bind(this, updatedOptions),
  };
};
