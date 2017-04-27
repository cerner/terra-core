import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

import i18nSupportedLanguages from './i18nSupportedLanguages';

function apply(options) {
  function getDirectories(srcPath) {
    return fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
  }

  i18nSupportedLanguages.forEach((language) => {
    const currentLanguageMessages = {};
    getDirectories(path.resolve(options.baseDirectory, 'node_modules')).forEach((module) => {
      const translationFile = path.resolve(options.baseDirectory, 'node_modules', module, 'translations', `${language}.js`);
      if (fs.existsSync(translationFile)) {
        /* eslint-disable global-require, import/no-dynamic-require */
        const translationForModule = require(translationFile);
        /* eslint-enable global-require, import/no-dynamic-require */
        Object.assign(currentLanguageMessages, translationForModule.messages);
      }
    });

    if (currentLanguageMessages !== {}) {
      mkdirp(path.resolve(options.baseDirectory, 'aggregated-translations'));
      fs.writeFileSync(path.resolve(options.baseDirectory, 'aggregated-translations', `${language}.js`),
`import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/${language.split('-')[0]}';

addLocaleData(localeData);

const messages = ${JSON.stringify(currentLanguageMessages, null, 2)};

module.exports = {
  areTranslationsLoaded: true,
  locale: '${language}',
  messages,
};`,
      );
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
