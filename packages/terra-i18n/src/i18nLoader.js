/* eslint-disable */
import Intl from './intl';
import loadIntl from './intlLoaders';
import loadTranslations from './translationsLoaders';
import supportedLocales from './i18nSupportedLocales';

const hasIntl = typeof (Intl) !== 'undefined';

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
      loadIntl(locale);
      loadTranslations(locale, callback, scope);
  } else {
    loadTranslations(locale, callback, scope);
  }
};
