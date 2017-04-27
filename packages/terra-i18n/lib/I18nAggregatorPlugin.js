'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _i18nSupportedLanguages = require('./i18nSupportedLanguages');

var _i18nSupportedLanguages2 = _interopRequireDefault(_i18nSupportedLanguages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function I18nAggregatorPlugin() {}

I18nAggregatorPlugin.prototype.apply = function (compiler) {
  function getDirectories(srcPath) {
    return _fs2.default.readdirSync(srcPath).filter(function (file) {
      return _fs2.default.statSync(_path2.default.join(srcPath, file)).isDirectory();
    });
  }

  _i18nSupportedLanguages2.default.forEach(function (language) {
    var currentLanguageMessages = {};
    getDirectories(_path2.default.resolve(compiler.context, 'node_modules')).forEach(function (module) {
      var translationFile = _path2.default.resolve(compiler.context, 'node_modules', module, 'translations', language + '.js');
      if (_fs2.default.existsSync(translationFile)) {
        /* eslint-disable global-require, import/no-dynamic-require */
        var translationForModule = require(translationFile);
        /* eslint-enable global-require, import/no-dynamic-require */
        _extends(currentLanguageMessages, translationForModule.messages);
      }
    });

    if (currentLanguageMessages !== {}) {
      (0, _mkdirp2.default)(_path2.default.resolve(compiler.context, 'aggregatedTranslations'));
      _fs2.default.writeFileSync(_path2.default.resolve(compiler.context, 'aggregatedTranslations', language + '.js'), 'import { addLocaleData } from \'react-intl\';\nimport localeData from \'react-intl/locale-data/' + language.split('-')[0] + '\';\n\naddLocaleData(localeData);\n\nconst messages = ' + JSON.stringify(currentLanguageMessages, null, 2) + ';\n\nmodule.exports = {\n  load: true,\n  locale: \'' + language + '\',\n  messages,\n};');
    }
  });
};

module.exports = I18nAggregatorPlugin;