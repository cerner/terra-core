import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

import i18nSupportedLanguages from './i18nSupportedLanguages';

function I18nAggregatorPlugin() {}

I18nAggregatorPlugin.prototype.apply = (compiler) => {
  function getDirectories(srcPath) {
    return fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
  }

  i18nSupportedLanguages.forEach((language) => {
    const currentLanguageMessages = {};
    getDirectories(path.resolve(compiler.context, 'node_modules')).forEach((module) => {
      const translationFile = path.resolve(compiler.context, 'node_modules', module, 'translations', `${language}.js`);
      if (fs.existsSync(translationFile)) {
        /* eslint-disable global-require, import/no-dynamic-require */
        const translationForModule = require(translationFile);
        /* eslint-enable global-require, import/no-dynamic-require */
        Object.assign(currentLanguageMessages, translationForModule.messages);
      }
    });

    if (currentLanguageMessages !== {}) {
      mkdirp(path.resolve(compiler.context, 'aggregatedTranslations'));
      fs.writeFileSync(path.resolve(compiler.context, 'aggregatedTranslations', `${language}.js`),
`import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/${language.split('-')[0]}';

addLocaleData(localeData);

const messages = ${JSON.stringify(currentLanguageMessages, null, 2)};

module.exports = {
  load: true,
  locale: '${language}',
  messages,
};`,
      );
    }
  });
};

module.exports = I18nAggregatorPlugin;
