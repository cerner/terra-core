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

export default (locale) => {
  return import(/* webpackChunkName: "intl-polyfill" */'intl')
    .then(intlLoaders[locale])
    .then(translationLoaders[locale]);
};
