/* eslint-disable */
import intlLoaders from './intlLoaders';
import translationLoaders from './translationLoaders';
import supportedLocales from './i18nSupportedLocales';

const hasIntl = typeof (Intl) !== 'undefined';

export default (locale) => {
  if (!supportedLocales.includes(locale)) {
    return Promise.reject(`${locale} is not supported, supported locales: ${supportedLocales}`)
  }

  return import(/* webpackChunkName: "intl-polyfill" */'intl')
    .then(hasIntl ? intlLoaders[locale] : Promise.resolve())
    .then(translationLoaders[locale]);
};
