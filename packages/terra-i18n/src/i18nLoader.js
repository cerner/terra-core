/* eslint-disable */
import intlLoaders from './intlLoaders';
import translationLoaders from './translationLoaders';

import supportedLocales from './i18nSupportedLocales';

const hasIntl = typeof (Intl) !== 'undefined';

const permitParams = (locale, callback) => {
  if (supportedLocales.indexOf(locale) < 0) {
    throw new Error(`${locale} is not supported, supported locales:${supportedLocales}`);
  }
  if (typeof (callback) !== 'function') {
    throw new Error('Second argument must be function');
  }
}

module.exports = (locale, callback, scope) => {
  permitParams(locale, callback);
  if (!hasIntl) {
    require.ensure([], (require) => {
      require('intl');
      intlLoaders[locale]();
      translationLoaders[locale](callback, scope);
    }, 'intl-polyfill');
  } else {
    translationLoaders[locale](callback, scope);
  }
};
