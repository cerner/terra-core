'use strict';

var _intlLoaders = require('./intlLoaders');

var _intlLoaders2 = _interopRequireDefault(_intlLoaders);

var _translationLoaders = require('./translationLoaders');

var _translationLoaders2 = _interopRequireDefault(_translationLoaders);

var _i18nSupportedLanguages = require('./i18nSupportedLanguages');

var _i18nSupportedLanguages2 = _interopRequireDefault(_i18nSupportedLanguages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasIntl = typeof Intl !== 'undefined'; /* eslint-disable */


var permitParams = function permitParams(locale, callback) {
  var supportedLocales = _i18nSupportedLanguages2.default;
  if (supportedLocales.indexOf(locale) < 0) {
    throw new Error(locale + ' is not supported, supported locales:' + supportedLocales);
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