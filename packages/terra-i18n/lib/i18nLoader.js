'use strict';

var _intlLoaders = require('./intlLoaders');

var _intlLoaders2 = _interopRequireDefault(_intlLoaders);

var _translationLoaders = require('./translationLoaders');

var _translationLoaders2 = _interopRequireDefault(_translationLoaders);

var _i18nSupportedLocales = require('./i18nSupportedLocales');

var _i18nSupportedLocales2 = _interopRequireDefault(_i18nSupportedLocales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasIntl = typeof Intl !== 'undefined'; /* eslint-disable */


var permitParams = function permitParams(locale, callback) {
  if (_i18nSupportedLocales2.default.indexOf(locale) < 0) {
    throw new Error(locale + ' is not supported, supported locales:' + _i18nSupportedLocales2.default);
  }
  if (typeof callback !== 'function') {
    throw new Error('Second argument must be function');
  }
};

module.exports = function (locale, callback, scope) {
  permitParams(locale, callback);
  if (!hasIntl) {
    require.ensure([], function (require) {
      require('intl');
      _intlLoaders2.default[locale]();
      _translationLoaders2.default[locale](callback, scope);
    }, 'intl-polyfill');
  } else {
    _translationLoaders2.default[locale](callback, scope);
  }
};