'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateTranslationFile(language, messages) {
  return 'import { addLocaleData } from \'react-intl\';\nimport localeData from \'react-intl/locale-data/' + language.split('-')[0] + '\';\n\naddLocaleData(localeData);\n\nconst messages = ' + JSON.stringify(messages, null, 2) + ';\n\nmodule.exports = {\n  areTranslationsLoaded: true,\n  locale: \'' + language + '\',\n  messages,\n};';
}

function getDirectories(srcPath) {
  return _fs2.default.readdirSync(srcPath).filter(function (file) {
    return _fs2.default.statSync(_path2.default.join(srcPath, file)).isDirectory();
  });
}

function aggregateTranslations(options) {
  var supportedLocales = options.supportedLocales;
  supportedLocales.forEach(function (language) {
    var currentLanguageMessages = {};

    // Check base directory for translation file
    var baseTranslationFile = _path2.default.resolve(options.baseDirectory, 'translations', language + '.json');
    if (_fs2.default.existsSync(baseTranslationFile)) {
      _extends(currentLanguageMessages, JSON.parse(_fs2.default.readFileSync(baseTranslationFile, 'utf8')));
    }

    // Check module directory for translation file
    getDirectories(_path2.default.resolve(options.baseDirectory, 'node_modules')).forEach(function (module) {
      var translationFile = _path2.default.resolve(options.baseDirectory, 'node_modules', module, 'translations', language + '.json');
      if (_fs2.default.existsSync(translationFile)) {
        _extends(currentLanguageMessages, JSON.parse(_fs2.default.readFileSync(translationFile, 'utf8')));
      }
    });

    // Aggregate messages for language in one file
    if (currentLanguageMessages !== {}) {
      (0, _mkdirp2.default)(_path2.default.resolve(options.baseDirectory, 'aggregated-translations'));
      _fs2.default.writeFileSync(_path2.default.resolve(options.baseDirectory, 'aggregated-translations', language + '.js'), generateTranslationFile(language, currentLanguageMessages));
    } else {
      throw new Error('Translation file found for ' + language + '.json, but translations were not loaded correctly. Please check that your translated modules were installed correctly.');
    }
  });
}

module.exports = function (options) {
  var updatedOptions = options;
  if (updatedOptions instanceof Array) {
    updatedOptions = {
      include: updatedOptions
    };
  }

  if (!Array.isArray(updatedOptions.include)) {
    updatedOptions.include = [updatedOptions.include];
  }

  return {
    apply: aggregateTranslations.bind(undefined, updatedOptions)
  };
};