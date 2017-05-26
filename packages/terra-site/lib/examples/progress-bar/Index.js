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

var _README = require('terra-progress-bar/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-progress-bar/package.json');

var _ProgressBar = require('!raw-loader!terra-progress-bar/src/ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _ProgressBarDefault = require('./ProgressBarDefault');

var _ProgressBarDefault2 = _interopRequireDefault(_ProgressBarDefault);

var _ProgressBarSize = require('./ProgressBarSize');

var _ProgressBarSize2 = _interopRequireDefault(_ProgressBarSize);

var _ProgressBarColor = require('./ProgressBarColor');

var _ProgressBarColor2 = _interopRequireDefault(_ProgressBarColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
var ProgressBarExamples = function ProgressBarExamples() {
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
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _ProgressBar2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'default' },
      'Default'
    ),
    _react2.default.createElement(_ProgressBarDefault2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'size' },
      'Size'
    ),
    _react2.default.createElement(_ProgressBarSize2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'color' },
      'Color'
    ),
    _react2.default.createElement(_ProgressBarColor2.default, null)
  );
};

// Example Files
exports.default = ProgressBarExamples;