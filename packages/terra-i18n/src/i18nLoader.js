/* eslint-disable */
const Intl = require('./intl');
const loadIntl = require('./intlLoaders');
const loadTranslations = require('./translationsLoaders');

let hasIntl;
try {
  hasIntl = typeof (Intl) !== 'undefined' && Intl.DateTimeFormat !== 'undefined';
} catch (error) {
  hasIntl = false;
}

const permitParams = (callback) => {
  if (typeof (callback) !== 'function') {
    throw new Error('Second argument must be function');
  }
}

module.exports = (locale, callback, scope) => {
  permitParams(callback);
  if (!hasIntl) {
    loadIntl(locale);
    loadTranslations(locale, callback, scope);
  } else {
    loadTranslations(locale, callback, scope);
  }
};
