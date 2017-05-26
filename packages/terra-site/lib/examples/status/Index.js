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

var _README = require('terra-status/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-status/package.json');

var _Status = require('!raw-loader!terra-status/src/Status');

var _Status2 = _interopRequireDefault(_Status);

var _StatusDefault = require('./StatusDefault');

var _StatusDefault2 = _interopRequireDefault(_StatusDefault);

var _StatusImage = require('./StatusImage');

var _StatusImage2 = _interopRequireDefault(_StatusImage);

var _StatusIcon = require('./StatusIcon');

var _StatusIcon2 = _interopRequireDefault(_StatusIcon);

var _StatusArrange = require('./StatusArrange');

var _StatusArrange2 = _interopRequireDefault(_StatusArrange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example Files
var StatusExamples = function StatusExamples() {
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
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _Status2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'default' },
      'Status with text'
    ),
    _react2.default.createElement(_StatusDefault2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'image' },
      'Status with Image'
    ),
    _react2.default.createElement(_StatusImage2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'icon' },
      'Status with Icon'
    ),
    _react2.default.createElement(_StatusIcon2.default, null),
    _react2.default.createElement(
      'h2',
      { id: 'arrange' },
      'Status with Arrange'
    ),
    _react2.default.createElement(_StatusArrange2.default, null)
  );
};

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
exports.default = StatusExamples;