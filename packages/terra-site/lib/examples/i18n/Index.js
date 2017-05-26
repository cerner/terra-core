'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraPropsTable = require('terra-props-table');

var _terraPropsTable2 = _interopRequireDefault(_terraPropsTable);

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _README = require('terra-i18n/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-i18n/package.json');

var _I18nProvider = require('!raw-loader!terra-i18n/src/I18nProvider');

var _I18nProvider2 = _interopRequireDefault(_I18nProvider);

var _I18nDemo = require('./I18nDemo');

var _I18nDemo2 = _interopRequireDefault(_I18nDemo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
var I18nExamples = function I18nExamples() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { id: 'version' },
      'Version: ',
      _package.version
    ),
    _react2.default.createElement(_terraMarkdown2.default, { id: 'readme', src: _README2.default }),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _I18nProvider2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'baseWithI18n' },
      'I18nProvider'
    ),
    _react2.default.createElement(_I18nDemo2.default, null)
  );
};

// Example Files
exports.default = I18nExamples;