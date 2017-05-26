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

var _README = require('terra-image/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-image/package.json');

var _Image = require('!raw-loader!terra-image/src/Image');

var _Image2 = _interopRequireDefault(_Image);

var _ImageDefault = require('./ImageDefault');

var _ImageDefault2 = _interopRequireDefault(_ImageDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
var ImageExamples = function ImageExamples() {
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
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _Image2.default }),
    _react2.default.createElement(_ImageDefault2.default, null)
  );
};

// Example Files
exports.default = ImageExamples;