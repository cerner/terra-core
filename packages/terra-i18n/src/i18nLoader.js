/* eslint-disable */
import loadIntl from './intlLoaders';
import loadTranslations from './translationsLoaders';

import supportedLocales from './i18nSupportedLocales';

let hasIntl;
try {
  hasIntl = typeof (Intl) !== 'undefined' && Intl.DateTimeFormat !== 'undefined';
} catch (error) {
  hasIntl = false;
}


const permitParams = (locale, callback) => {
  if (process.env.NODE_ENV !== 'production' && supportedLocales.indexOf(locale) < 0) {
    console.warn(`${locale} is not a supported locale, supported locales include: ${supportedLocales.join(', ')}.`);
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
      loadIntl(locale);
      loadTranslations(locale, callback, scope);
    }, 'intl-polyfill');
  } else {
    loadTranslations(locale, callback, scope);
  }
};
